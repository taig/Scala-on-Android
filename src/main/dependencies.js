var names = require( './names.js' );

var dependencies =
{
	'android-sdk':
	{
		version: '22',
		title: names.abbreviation( 'android-sdk' ),
		format: function () { return 'android-' + this.version; }
	},
	'sbt-plugin':
	{
		group: 'com.hanhuy.sbt',
		artifact: 'android-sdk-plugin',
		version: '1.3.22',
		title: names.name( 'sbt-plugin' ),
		url: function() { return 'https://bintray.com/pfn/sbt-plugins/' + this.artifact + '/' },
		format: function ()
		{
			return 'addSbtPlugin( "' + this.group + '" % "' + this.artifact + '" % "' + this.version + '" )';
		}
	}
};

module.exports =
{
	all: dependencies,
	format: function ( id )
	{
		return dependencies[id].format();
	}
};