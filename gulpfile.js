var	fs = require( 'fs' ),
	gulp = require( 'gulp' ),
	highlight = require( 'highlight.js' ),
	mkdirp = require( 'mkdirp' ),
	striptags = require( 'striptags' );
	_ = require( 'underscore' );

var plugin =
{
	connect: require( 'gulp-connect' ),
	convert: require( 'gulp-entity-convert' ),
	cssmin: require( 'gulp-cssmin' ),
	data: require( 'gulp-data' ),
	debug: require( 'gulp-debug' ),
	dom: require( 'gulp-dom' ),
	filter: require( 'gulp-filter' ),
	htmlmin: require( 'gulp-htmlmin' ),
	htmllint: require( 'gulp-htmllint' ),
	jshint: require( 'gulp-jshint' ),
	maps: require( 'gulp-sourcemaps' ),
	nunjucks: require( 'gulp-nunjucks-render' ),
	plumber: require( 'gulp-plumber' ),
	prefixer: require( 'gulp-autoprefixer' ),
	reload: require( 'gulp-livereload' ),
	rename: require('gulp-rename'),
	rjs: require( 'gulp-requirejs-optimize' ),
	sass: require( 'gulp-sass' ),
	watch: require( 'gulp-watch' )
};

var	source =
{
	asset: './src/asset/',
	main: './src/main/'
},
destination =
{
	asset: './dist/asset/',
	main: './dist/'
};

var url = 'http://scala-on-android.taig.io';

gulp.task( 'default', [ 'assets', 'sitemap', 'javascript', 'stylesheets', 'templates' ] );
gulp.task( 'develop', [ 'jshint', 'default', 'connect', 'watch' ] );

gulp.task( 'jshint', function()
{
	gulp.src( source.main + '**/*.js' )
		.pipe( plugin.jshint() )
		.pipe( plugin.jshint.reporter( 'default' ) )
		.pipe( plugin.jshint.reporter( 'fail' ) );
} );

gulp.task( 'assets', function()
{
	gulp.src( source.asset + '*/**/*' )
		.pipe( plugin.plumber() )
		.pipe( gulp.dest( destination.asset ) )
		.pipe( plugin.reload() );

	gulp.src( source.asset + '*.*' )
		.pipe( plugin.plumber() )
		.pipe( gulp.dest( destination.main ) )
		.pipe( plugin.reload() );
} );

gulp.task( 'javascript', function()
{
	gulp.src( source.main + 'main.js' )
		.pipe( plugin.plumber() )
		.pipe( plugin.rjs(
		{
			baseUrl: source.main,
			name: 'main',
			out: 'main.js',
			paths:
			{
				jquery: '../lib/jquery-2.1.4'
			}
		} ) )
		.pipe( gulp.dest( destination.asset + 'javascript/' ) )
		.pipe( plugin.reload() );
} );

gulp.task( 'stylesheets', function()
{
	gulp.src( source.main + 'main.sass' )
		.pipe( plugin.plumber() )
		.pipe( plugin.maps.init() )
		.pipe( plugin.sass( { indentedSyntax: true } ) )
		.pipe( plugin.prefixer() )
		.pipe( plugin.maps.write( '.' ) )
		.pipe( gulp.dest( destination.asset + 'stylesheet/' ) )
		.pipe( plugin.filter( '*.css' ) )
		.pipe( plugin.rename( { suffix: '.min' } ) )
		.pipe( plugin.cssmin() )
		.pipe( gulp.dest( destination.asset + 'stylesheet/' ) )
		.pipe( plugin.reload() );
} );

gulp.task( 'sitemap', function()
{
	var sitemap = require( source.main + 'sitemap.js' ),
		current = sitemap.all[0],
		urls = [];

	while( current.hasOwnProperty( 'next' ) )
	{
		if( current.hasOwnProperty( 'url' ) )
		{
			urls.push( url + current.url )
		}

		current = current.next
	}

	mkdirp( destination.main );
	fs.writeFileSync(
		destination.main + 'sitemap.xml',
		'<?xml version="1.0" encoding="UTF-8"?>' +
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+
		urls.map( function( url ) { return '<url><loc>' + url + '</loc></url>'; } ).join() +
		'</urlset>'
	);
} );

gulp.task( 'templates', function()
{
	var	software = require( source.main + 'software.js' ),
		names = require( source.main + 'names.js' ),
		sitemap = require( source.main + 'sitemap.js' ),
		sources = require( source.main + 'sources.js' );

	plugin.nunjucks.nunjucks
		.configure( source.main, { autoescape: false, watch: false } )
		.addFilter( 'striptags', striptags );

	gulp.src( [ source.main + 'index.html', source.main + 'page/**/index.html' ] )
		.pipe( plugin.data( { software: software, names: names, sitemap: sitemap, sources: sources } ) )
		.pipe( plugin.nunjucks() )
		.pipe( plugin.rename( function( path )
		{
			// Move page/ subdirectories to root directory
			if( path.dirname.indexOf( 'page/' ) === 0 )
			{
				path.dirname = path.dirname.substr( 5 );
			}
		} ) )
		.pipe( plugin.dom( function()
		{
			var items = this.querySelectorAll( '[data-src]' );

			for( var i = 0; i < items.length; i++ )
			{
				var item = items[i];
				url = 'https://github.com/taig/scala-on-android/edit/master/src/main/' + item.getAttribute( 'data-src' );

				item.removeAttribute( 'data-src' );

				var a = this.createElement( 'a' );
				a.setAttribute( 'class', 'edit' );
				a.setAttribute( 'href', url );
				a.setAttribute( 'target', '_blank' );
				a.setAttribute( 'title', 'Edit on GitHub' );
				a.innerHTML = '<span>Edit</span>';

				item.appendChild( a );
			}

			return this;
		} ) )
		.pipe( plugin.dom( function()
		{
			var items = this.querySelectorAll( '.highlight' );

			for( var i = 0; i < items.length; i++ )
			{
				var	item = items[i],
					language = item.getAttribute( 'data-language' ),
					script = item.innerHTML.replace( /<!--REMOVEME([\s\S]*)-->/, '$1' );

				item.removeAttribute( 'data-language' );
				item.innerHTML = language ? highlight.highlight( language, script, true ).value : script;
			}

			return this;
		} ) )
		.pipe( plugin.htmlmin(
		{
			collapseBooleanAttributes: true,
			collapseWhitespace: true,
			minifyCSS: true,
			minifyJS: true,
			minifyURLs: true,
			removeAttributeQuotes: true,
			removeComments: true,
			removeRedundantAttributes: true,
			removeEmptyAttributes: true
		} ) )
		.pipe( gulp.dest( destination.main ) );
} );

gulp.task( 'watch', function()
{
	plugin.reload.listen();

	plugin.watch( source.asset + '**/*', function() { gulp.start( 'assets' ); } );
	plugin.watch( source.main + '**/*.js', function() { gulp.start( 'javascript' ); } );
	plugin.watch( source.main + '**/*.{sass,scss}', function() { gulp.start( 'stylesheets' ); } );
	plugin.watch( source.main + '**/*.{html,txt,scala,java}', function() { gulp.start( 'templates' ); } );
} );

gulp.task( 'connect', function()
{
	plugin.connect.server(
	{
		root: destination.main,
		livereload: true
	} );
} );