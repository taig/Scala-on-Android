var names = require( './names.js' ),
	sources = require( './sources.js' );

var dependencies =
{
	'android-sdk':
	{
		version: '22',
		title: names.abbreviation( 'android-sdk' ),
		format: function() { return 'android-' + this.version; }
	},
	'intellij-idea':
	{
		version: '14.1.3',
		title: names.name( 'intellij-idea' ) + ' (Community Edition)',
		url: function() { return sources.find( 'intellij-idea-download' ).url; }
	},
	'sbt-plugin':
	{
		group: 'com.hanhuy.sbt',
		artifact: 'android-sdk-plugin',
		version: '1.3.22',
		title: names.name( 'sbt-plugin' ),
		url: function() { return 'https://bintray.com/pfn/sbt-plugins/' + this.artifact + '/' },
		format: function()
		{
			return 'addSbtPlugin( "' + this.group + '" % "' + this.artifact + '" % "' + this.version + '" )';
		}
	}
};

module.exports =
{
	all: dependencies,
	find: function( id ) { return dependencies[id]; },
	format: function( id )
	{
		return dependencies[id].format();
	}
};