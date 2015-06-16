var names = require( './names.js' );

/**
 * Page structure
 * 
 * Ids and urls will later be concatenated with their root element values as prefix. Unique ids and urls are there-
 * fore only require for each level.
 */
var sitemap = [
	{ id: 'contents', title: 'Table of contents', url: '/', skip: true },
	{ id: 'introduction', title: 'Introduction', url: '/introduction' },
	{ id: 'prerequisites', title: 'Prerequisites', url: '/prerequisites' },
	{ id: 'build-tool', title: 'Build Tool', url: '/build-tool', children: [
		{ id: 'sbt', title: names.render( 'sbt' ), url: '/sbt' }
	] },
	{ id: 'project-setup', title: 'Project setup', url: '/project-setup' },
	{ id: 'editor', title: 'Editors and ' + names.abbreviation( 'ide' ) + 's', url: '/editor', children: [
		{ id: 'intellij-idea', title: names.name( 'intellij-idea' ), url: '/intellij-idea' },
		{ id: 'android-studio', title: names.name( 'android-studio' ), url: '/android-studio' }
	] },
	{ id: 'command-line', title: 'Working with the command line', url: '/command-line' },
	{ id: 'dependencies', title: 'Dependencies', url: '/dependencies' },
	{ id: 'proguard', title: names.name( 'proguard' ), url: '/proguard', children: [
		{ id: 'cache', title: 'Cache', url: '/cache' }
	] },
	{ id: 'tr', title: names.render( 'tr' ), url: '/typed-resources' },
	{ id: 'parcelable', title: names.name( 'parcelable' ), url: '/parcelable' },
	{ id: 'testing', title: 'Testing', url: '/testing', children: [
		{ id: 'robolectric', title: names.name( 'robolectric' ), url: '/robolectric' }
	] },
	{ id: 'library-project', title: 'Library projects' },
	{ id: 'publish', title: 'Publishing' },
	{ id: 'help', title: 'Getting help', url: '/help', skip: true },
	{ id: 'sources', title: 'Sources', url: '/sources', skip: true },
	{ id: 'software', title: 'Software', url: '/software', skip: true },
	{ id: 'abbreviations', title: 'Abbreviations', url: '/abbreviations', skip: true }
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

			if( page.url )
			{
				page.url = root.url + page.url;
			}
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
			path.unshift( current );
			current = current.parent;
		}
		while( current );

		return path;
	},
	anchor: function( id, title )
	{
		var entry = find( id );

		if( entry.url )
		{
			return '<a href="' + entry.url + '">' + ( title || entry.title ) + '</a>';
		}
		else
		{
			return '<span>' + ( title || entry.title ) + '</span>';
		}
	}
};