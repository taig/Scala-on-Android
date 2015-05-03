var	gulp = require( 'gulp' ),
	markdown = require( 'nunjucks-markdown' ),
	marked = require( 'marked' );

var plugin =
{
	connect: require( 'gulp-connect' ),
	maps: require( 'gulp-sourcemaps' ),
	nunjucks: require( 'gulp-nunjucks-render' ),
	plumber: require( 'gulp-plumber' ),
	prefixer: require( 'gulp-autoprefixer' ),
	reload: require( 'gulp-livereload' ),
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

gulp.task( 'default', [ 'assets', 'stylesheets', 'templates' ] );
gulp.task( 'develop', [ 'default', 'connect', 'watch' ] );

gulp.task( 'assets', function()
{
	gulp.src( source.asset + '**/*' )
		.pipe( plugin.plumber() )
		.pipe( gulp.dest( destination.asset ) )
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
		.pipe( gulp.dest( destination.asset + '/stylesheet' ) )
		.pipe( plugin.reload() );
} );

gulp.task( 'templates', function()
{
	markdown.register(
		plugin.nunjucks.nunjucks.configure( [ source.main ] ),
		marked
	);

	gulp.src( source.main + '**/index.html' )
		.pipe( plugin.plumber() )
		.pipe( plugin.nunjucks() )
		.pipe( gulp.dest( destination.main ) )
		.pipe( plugin.reload() );
} );

gulp.task( 'watch', function()
{
	plugin.reload.listen();

	plugin.watch( source.asset + '**/*', function() { gulp.start( 'assets' ); } );
	plugin.watch( source.main + '**/*.{sass,scss}', function() { gulp.start( 'stylesheets' ); } );
	plugin.watch( source.main + '**/*.{html,md}', function() { gulp.start( 'templates' ); } );
} );

gulp.task( 'connect', function()
{
	plugin.connect.server(
	{
		root: destination.main,
		livereload: true
	} );
} );