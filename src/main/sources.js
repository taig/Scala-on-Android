var names = require( './names.js' );

/**
 * A collection of URLs that contain further information which are relevant for this documentation
 */
var sources =
{
	'47deg-sbt':
	{
		description: 'Detailed explanation of ' + names.abbreviation( 'sbt' ) + ' and the ' + names.name( 'sbt-plugin' ) + ' fundamentals',
		url: 'http://www.47deg.com/blog/scala-on-android-setting-sbt-configuration',
		title: names.name( 'scala' ) + ' on ' + names.name( 'android' ) + ' - Setting ' + names.abbreviation( 'sbt' ) + ' configuration'
	},
	'android':
	{
		description: 'Official website',
		url: 'hhttp://www.android.com/',
		title: names.name( 'android' )
	},
	'android-api-guides':
	{
		description: 'Official ' + names.name( 'android' ) + ' documentation',
		url: 'https://developer.android.com/guide/index.html',
		title: names.name( 'android' ) + ' ' + names.abbreviation( 'api' ) + ' Guides'
	},
	'android-install':
	{
		description: names.abbreviation( 'android-sdk' ) + ' install instructions',
		url: 'https://developer.android.com/sdk/installing/index.html?pkg=tools',
		title: 'Installing the Stand-alone ' + names.abbreviation( 'sdk' ) + ' Tools'
	},
	'android-download':
	{
		description: 'Official download page',
		url: 'https://developer.android.com/sdk/index.html#Other',
		title: names.abbreviation( 'android-sdk' ) + ' download'
	},
	'android-reference':
	{
		description: 'Official ' + names.abbreviation( 'android-sdk' ) + ' reference',
		url: 'https://developer.android.com/reference/packages.html',
		title: names.name( 'android' ) + ' Reference'
	},
	'android-runtime':
	{
		description: names.name( 'wikipedia' ) + ' article',
		url: 'http://en.wikipedia.org/wiki/Android_Runtime',
		title: names.name( 'art' )
	},
	'android-training':
	{
		description: 'Official ' + names.name( 'android' ) + ' tutorials',
		url: 'https://developer.android.com/training/index.html',
		title: names.name( 'android' ) + ' Training'
	},
	'android-tools':
	{
		description: 'Description of all tools that are bundled with an ' + names.name( 'android' ) + ' installation',
		url: 'https://developer.android.com/tools/help/index.html',
		title: names.name( 'android' ) + ' Tools'
	},
	'g8':
	{
		description: '"A command line tool to apply templates defined on ' + names.name( 'gh' ) + '"',
		url: 'https://github.com/n8han/giter8/',
		title: names.name( 'g8' )
	},
	'g8-templates':
	{
		description: 'A collection of ' + names.name( 'g8' ) + ' templates on ' + names.name( 'gh' ),
		url: 'https://github.com/n8han/giter8/wiki/giter8-templates',
		title: names.name( 'g8' ) + ' templates'
	},
	'gradle-plugin':
	{
		description: '"Adds ' + names.name( 'scala' ) + ' language support to official ' + names.name( 'gradle' ) + ' ' + names.name( 'android' ) + ' plugin"',
		url: 'https://github.com/saturday06/gradle-android-scala-plugin',
		title: names.name( 'gradle-plugin' )
	},
	'intellij-idea':
	{
		description: 'Official product page',
		url: 'https://www.jetbrains.com/idea/',
		title: names.name( 'intellij-idea' )
	},
	'maven-plugin':
	{
		description: names.name( 'android' ) + ' plugin for ' + names.name( 'maven' ) + ', which can be configured to support ' + names.name( 'scala-android' ),
		url: 'https://github.com/simpligility/android-maven-plugin/tree/master/src/test/projects/scala',
		title: names.name( 'android' ) + ' ' + names.name( 'maven' ) + ' Plugin'
	},
	'project':
	{
		description: names.name( 'gh' ) + ' repository that contains the source code of this documentation',
		url: 'https://github.com/taig/scala-on-android',
		title: names.name( 'scala-android' ) + ' documentation'
	},
	'project-skeleton':
	{
		description: names.name( 'gh' ) + ' repository that should be cloned in order to set up a new project',
		url: 'https://github.com/taig/scala-on-android-skeleton',
		title: names.name( 'scala-android' ) + ' project skeleton'
	},
	'scala':
	{
		description: 'Official website',
		url: 'http://www.scala-lang.org/',
		title: names.name( 'scala' )
	},
	'scala-android-introduction-slides':
	{
		description: names.name( 'slideshare' ) + ' document that first introduces ' + names.name( 'scala' ) + ' and ' + names.name( 'android' ) + ' separatly and then briefly explains ' + names.name( 'scala-android' ),
		url: 'http://de.slideshare.net/jakub.kahovec/scala-on-android-12657430',
		title: names.name( 'scala-android' )
	},
	'sbt-manual':
	{
		description: 'Official ' + names.abbreviation( 'sbt' ) + ' documentation',
		url: 'http://www.scala-sbt.org/0.13/docs/index.html',
		title: names.abbreviation( 'sbt' ) + ' Reference Manual'
	},
	'sbt-plugin':
	{
		description: '"An easy-to-use ' + names.abbreviation( 'sbt' ) + ' plugin for working with all ' + names.name( 'android' ) + ' projects"',
		url: 'https://github.com/pfn/android-sdk-plugin',
		title: names.name( 'sbt-plugin' )
	},
	'sbt-tutorial':
	{
		description: 'Official ' + names.abbreviation( 'sbt' ) + ' tutorial',
		url: 'http://www.scala-sbt.org/0.13/tutorial/index.html',
		title: 'Getting Started with ' + names.abbreviation( 'sbt' )
	},
	'sbt-vs-gradle':
	{
		description: 'A ' + names.name( 'so' ) + ' discussion',
		url: 'http://stackoverflow.com/questions/11061938/comparing-sbt-and-gradle',
		title: names.abbreviation( 'sbt' ) + ' vs. ' + names.name( 'gradle' )
	}
};

module.exports =
{
	all: sources,
	find: function( id )
	{
		return sources[id];
	}
};