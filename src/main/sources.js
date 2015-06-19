var names = require( './names.js' );

/**
 * A collection of URLs that contain further information which are relevant for this documentation
 */
var sources =
{
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
	'android-butterknife':
	{
		description: 'View "injection" library for ' + names.name( 'android' ),
		url: 'http://jakewharton.github.io/butterknife/',
		title: '<em>Butterknife</em>'
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
	'android-studio':
	{
		description: 'Official ' + names.name( 'android' ) + ' ' + names.abbreviation( 'ide' ) + ', based on ' + names.name( 'intellij-idea' ),
		url: 'http://developer.android.com/tools/studio/index.html',
		title: names.name( 'android-studio' )
	},
	'android-studio-download':
	{
		description: 'Official download page',
		url: 'http://developer.android.com/sdk/index.html',
		title: names.name( 'android-studio' ) + ' download'
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
	'blog-47deg-configuration':
	{
		description: 'Detailed explanation of ' + names.abbreviation( 'sbt' ) + ' and the ' + names.name( 'sbt-plugin' ) + ' fundamentals',
		url: 'http://www.47deg.com/blog/scala-on-android-setting-sbt-configuration',
		title: names.name( 'scala-android' ) + ' - Setting ' + names.abbreviation( 'sbt' ) + ' configuration'
	},
	'blog-developerphil-parcelable-serializable':
	{
		description: 'A performance and usability comparison',
		url: 'http://www.developerphil.com/parcelable-vs-serializable/',
		title: names.name( 'parcelable' ) + ' vs. <em>Serializable</em>'
	},
	'blog-gutefrage-gradle-android-studio':
	{
		description: 'A brief tutorial of setting up a ' + names.name( 'scala-android' ) + ' project with ' + names.name( 'gradle' ) + ' and ' + names.name( 'android-studio' ),
		url: 'http://engineering.gutefrage.net/2015/01/15/building-an-android-app-using-scala/',
		title: 'Building an ' + names.name( 'android' ) + ' app using ' + names.name( 'scala' )
	},
	'blog-tutsplus-gradle':
	{
		description: 'An analysis of the ' + names.name( 'gradle' ) + ' build system and its integration with ' + names.name( 'android-studio' ),
		url: 'http://code.tutsplus.com/tutorials/the-ins-and-outs-of-gradle--cms-22978',
		title: 'The Ins and Outs of ' + names.name( 'gradle' )
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
	'intellij-idea-editions-comparison':
	{
		description: 'Comparison of the <em>Ultimate</em> and <em>Community Edition</em>',
		url: 'https://www.jetbrains.com/idea/features/editions_comparison_matrix.html',
		title: names.name( 'intellij-idea' ) + ' Editions Comparison'
	},
	'intellij-idea-download':
	{
		description: 'Official download page',
		url: 'https://www.jetbrains.com/idea/download/',
		title: names.name( 'intellij-idea' ) + ' download'
	},
	'intellij-idea-plugin-sbt':
	{
		description: 'Official product page',
		url: 'https://plugins.jetbrains.com/plugin/5007/',
		title: names.abbreviation( 'sbt' ) + ' plugin for ' + names.name( 'intellij-idea' )
	},
	'intellij-idea-plugin-scala':
	{
		description: 'Official product page',
		url: 'https://plugins.jetbrains.com/plugin/1347/',
		title: names.abbreviation( 'scala' ) + ' plugin for ' + names.name( 'intellij-idea' )
	},
	'maven-plugin':
	{
		description: names.name( 'android' ) + ' plugin for ' + names.name( 'maven' ) + ', which can be configured to support ' + names.name( 'scala-android' ),
		url: 'https://github.com/simpligility/android-maven-plugin/tree/master/src/test/projects/scala',
		title: names.name( 'android' ) + ' ' + names.name( 'maven' ) + ' Plugin'
	},
	'android-documentation-multidex':
	{
		description: 'Official documentation',
		url: 'https://developer.android.com/tools/building/multidex.html',
		title: names.name( 'android' ) + ' documentation: ' + names.name( 'multidex' )
	},
	'sbt-plugin-sample':
	{
		description: names.name( 'gh' ) + ' repository',
		url: 'https://github.com/pfn/android-sdk-plugin/tree/master/sbt-test/android-sdk-plugin/',
		title: names.name( 'sbt-plugin' ) + ' samples'
	},
	'sbt-plugin-sample-multidex':
	{
		description: names.name( 'gh' ) + ' repository',
		url: 'https://github.com/pfn/android-sdk-plugin/tree/master/sbt-test/android-sdk-plugin/hello-multidex',
		title: names.name( 'sbt-plugin' ) + ' sample: ' + names.name( 'multidex' )
	},
	'okio':
	{
		description: names.name( 'gh' ) + ' project repository',
		url: 'https://github.com/square/okio',
		title: '<em>Okio</em>'
	},
	'play-framework-documentation-sbt-dependencies':
	{
		description: 'Official documentation',
		url: 'https://www.playframework.com/documentation/2.4.x/SBTDependencies',
		title: names.name( 'play' ) + ': ' + names.abbreviation( 'sbt' ) + ' dependencies'
	},
	'proguard':
	{
		description: 'Official project page',
		url: 'http://proguard.sourceforge.net/',
		title: names.name( 'proguard' )
	},
	'proguard-android-documentation':
	{
		description: names.name( 'android' ) + ' developer documentation about ' + names.name( 'proguard' ),
		url: 'http://developer.android.com/tools/help/proguard.html',
		title: names.name( 'proguard' ) + ' ' + names.name( 'android' ) + ' documentation'
	},
	'proguard-keep-options':
	{
		description: 'Listing and explanation of all available keep options',
		url: 'http://proguard.sourceforge.net/manual/usage.html#keepoptions',
		title: names.name( 'proguard' ) + ' keeps options'
	},
	'project':
	{
		description: names.name( 'gh' ) + ' repository that contains the source code of this documentation',
		url: 'https://github.com/taig/scala-on-android',
		title: names.name( 'scala-android' ) + ' documentation'
	},
	'hello-scala':
	{
		description: names.name( 'gh' ) + ' repository that serves as ' + names.name( 'scala-android' ) + ' project starter template',
		url: 'https://github.com/taig/hello-scala',
		title: 'Hello Scala!'
	},
	'robolectric':
	{
		description: 'Official project page',
		url: 'http://robolectric.org/',
		title: names.name( 'robolectric' )
	},
	'robotest':
	{
		description: names.name( 'gh' ) + ' project page',
		url: 'https://github.com/zbsz/robotest',
		title: names.name( 'robotest' )
	},
	'sbt':
	{
		description: 'Official project page',
		url: 'http://www.scala-sbt.org/',
		title: names.name( 'sbt' )
	},
	'sbt-download':
	{
		description: 'Official project page',
		url: 'http://www.scala-sbt.org/download.html',
		title: names.abbreviation( 'sbt' ) + ': Download'
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
	'sbt-plugin-issues':
	{
		description: names.name( 'gh' ) + ' issue tracker',
		url: 'https://github.com/pfn/android-sdk-plugin/issues',
		title: names.name( 'sbt-plugin' ) + ' issues'
	},
	'sbt-plugin-gen-idea':
	{
		description: names.name( 'gh' ) + ' repository',
		url: 'https://github.com/mpeltonen/sbt-idea',
		title: names.abbreviation( 'sbt' ) + ' plugin: <em>gen-idea</em>'
	},
	'sbt-plugin-proguard-defaults':
	{
		description: 'Default configuration source on ' + names.name( 'gh' ),
		url: 'https://github.com/pfn/android-sdk-plugin/blob/master/resources/android-proguard.config',
		title: names.name( 'sbt-plugin' ) + ' ' + names.name( 'proguard' ) + ' configuration'
	},
	'sbt-plugin-readme':
	{
		description: names.name( 'gh' ) + ' readme document',
		url: 'https://github.com/pfn/android-sdk-plugin/blob/master/README.md',
		title: names.name( 'sbt-plugin' ) + ' readme'
	},
	'sbt-plugin-sample-proguard':
	{
		description: 'Sample project on ' + names.name( 'gh' ),
		url: 'https://github.com/pfn/android-sdk-plugin/tree/master/sbt-test/android-sdk-plugin/proguard-cache',
		title: names.name( 'sbt-plugin' ) + ' ' + names.name( 'proguard' ) + ' sample'
	},
	'sbt-plugin-samples':
	{
		description: 'Sample projects on ' + names.name( 'gh' ),
		url: 'https://github.com/pfn/android-sdk-plugin/tree/master/sbt-test/',
		title: names.name( 'sbt-plugin' ) + ' samples'
	},
	'sbt-tutorial':
	{
		description: 'Official tutorial',
		url: 'http://www.scala-sbt.org/0.13/tutorial/index.html',
		title: names.abbreviation( 'sbt' ) + ' tutorial: Getting started'
	},
	'sbt-tutorial-library-dependencies':
	{
		description: 'Official tutorial',
		url: 'http://www.scala-sbt.org/0.13/tutorial/Library-Dependencies.html',
		title: names.abbreviation( 'sbt' ) + ' tutorial: Library dependencies'
	},
	'sbt-tutorial-multi-projects':
	{
		description: 'Official tutorial',
		url: 'http://www.scala-sbt.org/0.13/tutorial/Multi-Project.html',
		title: names.abbreviation( 'sbt' ) + ' tutorial: Multi-project-builds'
	},
	'sbt-tutorial-setup':
	{
		description: 'Official tutorial',
		url: 'http://www.scala-sbt.org/0.13/tutorial/Setup.html',
		title: names.abbreviation( 'sbt' ) + ' tutorial: Library dependencies'
	},
	'sbt-vs-gradle':
	{
		description: 'A ' + names.name( 'so' ) + ' discussion',
		url: 'http://stackoverflow.com/questions/11061938/comparing-sbt-and-gradle',
		title: names.abbreviation( 'sbt' ) + ' vs. ' + names.name( 'gradle' )
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
	'scala-ide':
	{
		description: 'Official product page',
		url: 'http://scala-ide.org/',
		title: names.name( 'scala-ide' )
	},
	'scala-android':
	{
		description: 'This documentation',
		url: 'https://github.com/taig/scala-on-android/',
		title: names.name( 'scala-android' )
	},
	'scala-android-mailing-list':
	{
		description: 'A good place to stay up to date with the community',
		url: 'https://groups.google.com/forum/#!forum/scala-on-android',
		title: names.name( 'scala-android' ) + ' mailing list'
	},
	'scala-parcelable':
	{
		description: 'Compile time code generation for ' + names.name( 'scala-android' ),
		url: 'https://github.com/taig/parcelable/',
		title: names.name( 'parcelable' )
	},
	'scala-pickling':
	{
		description: names.name( 'scala' ) + ' serialization project',
		url: 'http://lampwww.epfl.ch/~hmiller/pickling/',
		title: names.name( 'scala-pickling' )
	},
	'so':
	{
		description: 'Popular Q&amp;A platform for programming related topics',
		url: 'http://stackoverflow.com/',
		title: names.name( 'so' )
	},
	'vogella-testing':
	{
		description: names.name( 'vogella' ) + ' ' + names.name( 'android' ) + ' tutorial',
		url: 'http://www.vogella.com/tutorials/AndroidTesting/article.html',
		title: names.name( 'android' ) + ' application testing with the ' + names.name( 'android' ) + ' test framework'
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