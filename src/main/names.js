var names =
{
	'api':
	{
		abbreviation: 'API',
		name: 'Application Programming Interface'
	},
	'apk':
	{
		abbreviation: 'APK',
		name: 'Android application package'
	},
	'art':
	{
		abbreviation: 'ART',
		name: 'Android Runtime'
	},
	'android': { name: 'Android' },
	'android-sdk':
	{
		abbreviation: 'Android SDK',
		name: 'Android Software Development Kit'
	},
	'android-sdk-manager':
	{
		abbreviation: 'Android SDK Manager',
		name: 'Android Software Development Kit Manager'
	},
	'android-studio': { name: 'Android Studio' },
	'github': { name: 'GitHub' },
	'gradle': { name: 'Gradle' },
	'gradle-plugin': { name: 'gradle-android-scala-plugin' },
	'google': { name: 'Google' },
	'ide':
	{
		abbreviation: 'IDE',
		name: 'Integrated Development Environment'
	},
	'intellij-idea': { name: 'IntelliJ IDEA' },
	'java': { name: 'Java' },
	'jdk':
	{
		abbreviation: 'JDK',
		name: 'Java Development Kit'
	},
	'jvm':
	{
		abbreviation: 'JVM',
		name: 'Java Virtual Machine'
	},
	'maven': { name: 'Maven' },
	'proguard': { name: 'ProGuard' },
	'sbt':
	{
		abbreviation: 'sbt',
		name: 'Scala Build Tool'
	},
	'sbt-plugin': { name: 'Android SDK Plugin for SBT' },
	'scala': { name: 'Scala' },
	'scala-android': { name: 'Scala on Android' },
	'sdk':
	{
		abbreviation: 'SDK',
		name: 'Software Development Kit'
	},
	'so':
	{
		abbreviation: 'SO',
		name: 'StackOverflow'
	},
	'wikipedia': { name: 'Wikipedia' }
};

module.exports =
{
	all: names,
	/**
	 * Render the full name if abbreviation (if available)
	 */
	render: function( id )
	{
		if( names.hasOwnProperty( id ) )
		{
			var value = names[id].name;

			if( names[id].abbreviation )
			{
				value += ' (<abbr>' + names[id].abbreviation + '</abbr>)';
			}

			return '<em>' + value + '</em>';
		}
		else
		{
			throw id + ' does not exist';
		}
	},
	/**
	 * Explicitly only render the name
	 */
	name: function( id )
	{
		if( names.hasOwnProperty( id ) )
		{
			return '<em>' + names[id].name + '</em>';
		}
		else
		{
			throw id + ' does not exist';
		}
	},
	/**
	 * Render the abbreviation, if none available fall back to the full name
	 */
	abbreviation: function( id )
	{
		if( names.hasOwnProperty( id ) )
		{
			if( names[id].abbreviation )
			{
				return '<abbr title="' + names[id].name + '">' + names[id].abbreviation + '</abbr>';
			}
			else
			{
				return this.name( id );
			}
		}
		else
		{
			throw id + ' does not exist';
		}
	}
};