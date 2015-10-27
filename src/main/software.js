var names = require( './names.js' ),
	sources = require( './sources.js' );

var software =
{
	'android-sdk':
	{
		version: '23',
		title: names.abbr( 'android-sdk' ),
		format: function() { return 'android-' + this.version; }
	},
	'android-studio':
	{
		version: '1.2.1.1',
		title: names.name( 'android-studio' ),
		url: function() { return sources.find( 'android-studio-download' ).url; }
	},
	'intellij-idea':
	{
		version: '14.1.3',
		title: names.name( 'intellij-idea' ) + ' (Community Edition)',
		url: function() { return sources.find( 'intellij-idea-download' ).url; }
	},
	'robotest':
	{
		group: 'com.geteit',
		artifact: 'robotest',
		version: '0.12',
		title: names.name( 'robotest' ),
		url: function() { return 'https://github.com/zbsz/robotest'; },
		format: function()
		{
			return	'"' + this.group + '" %% "' + this.artifact + '" % "' + this.version + '" % "test"';
		}
	},
	'sbt-plugin':
	{
		group: 'com.hanhuy.sbt',
		artifact: 'android-sdk-plugin',
		version: '1.5.7',
		title: names.name( 'sbt-plugin' ),
		url: function() { return 'https://bintray.com/pfn/sbt-plugins/' + this.artifact + '/'; },
		format: function()
		{
			return 'addSbtPlugin( "' + this.group + '" % "' + this.artifact + '" % "' + this.version + '" )';
		}
	},
	'sbt-plugin-idea':
	{
		group: 'com.github.mpeltonen',
		artifact: 'sbt-idea',
		version: '1.7.0-SNAPSHOT',
		title: '<em>gen-idea</em>',
		url: function()
		{
			return	'https://oss.sonatype.org/content/repositories/snapshots/' +
					this.group.replace( '.', '/' ) + '/' +
					this.artifact + '_2.10_0.13/' +
					this.version + '/';
		},
		format: function()
		{
			return	'resolvers += "Sonatype snapshots" at "https://oss.sonatype.org/content/repositories/snapshots/"\n\n' +
					'addSbtPlugin( "' + this.group + '" % "' + this.artifact + '" % "' + this.version + '" )';
		}
	},
	'scalatest':
	{
		group: 'org.scalatest',
		artifact: 'scalatest',
		version: '2.2.5',
		title: names.name( 'scalatest' ),
		url: function()
		{
			return encodeURI(
				'http://search.maven.org/#artifactdetails|' + this.group + '|' + this.artifact + '_2.11|' + this.version
			);
		},
		format: function()
		{
			return '"' + this.group + '" %% "' + this.artifact + '" % "' + this.version + '" % "test"';
		}
	}
};

module.exports =
{
	all: software,
	find: function( id ) { return software[id]; },
	format: function( id ) { return software[id].format(); }
};
