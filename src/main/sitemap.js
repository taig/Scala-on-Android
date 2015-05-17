var names = require( './names.js' );

/**
 * Page structure
 * 
 * Ids and urls will later be concatenated with their root element values as prefix. Unique ids and urls are there-
 * fore only require for each level.
 */
var sitemap = [
	{ id: 'contents', title: 'Table of Contents', url: '/', skip: true },
	{ id: 'introduction', title: 'Introduction', url: '/introduction' },
	{ id: 'prerequisites', title: 'Prerequisites', url: '/prerequisites' },
	{ id: 'build-tool', title: 'Build Tool', url: '/build-tool', children: [
		{ id: 'sbt', title: names.render( 'sbt' ), url: '/sbt' }
	] },
	{ id: 'scaffolding', title: 'Scaffolding', url: '/scaffolding' },
	{ id: 'editor', title: 'Editor / ' + names.abbreviation( 'ide' ), url: '/editor', children: [
		{ id: 'intellij-idea', title: names.name( 'intellij-idea' ), url: '/intellij-idea' },
		{ id: 'android-studio', title: names.name( 'android-studio' ), url: '/android-studio' },
		{ id: 'scala-ide', title: names.name( 'scala-ide' ), url: '/scala-ide' },
		{ id: 'eclipse', title: names.name( 'eclipse' ), url: '/eclipse' }
	] }
];

// Update relative paths and ids, add next, previous and parent relations
( function update( level, root )
{
	level.forEach( function( page, i )
	{
		if( i > 0 )
		{
			page.previous = level[i - 1];

			if( page.previous.children )
			{
				page.previous = page.previous.children[page.previous.children.length - 1];
				page.previous.next = page;
			}
		}

		if( page.children )
		{
			page.next = page.children[0];
			page.next.previous = page;
		}
		else if( i < level.length - 1 )
		{
			page.next = level[i + 1];
		}

		if( root )
		{
			page.parent = root;
			page.id = root.id + '-' + page.id;
			page.url = root.url + page.url;
		}

		if( page.children )
		{
			update( page.children, page );
		}
	} );
} )( sitemap );

function find( id )
{
	var current = arguments.length === 2 ? arguments[1] : sitemap[0];

	if( current.id === id )
	{
		return current;
	}
	else if( current.next )
	{
		return find( id, current.next );
	}
}

module.exports =
{
	all: sitemap,
	find: find,
	path: function( current )
	{
		var path = [];

		do
		{
			// TODO upgrade to nunjucks 1.2.6 and use join( x, attribute=title ) instead
			path.unshift( current.title );
			current = current.parent;
		}
		while( current );

		return path;
	}
};