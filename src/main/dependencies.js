var dependencies =
{
	'android-sdk': '22',
	'sbt-plugin':
	{
		group: 'com.hanhuy.sbt',
		artifact: 'android-sdk-plugin',
		version: '1.3.22'
	}
};

module.exports =
{
	all: dependencies,
	androidTarget: 'android-' + dependencies['android-sdk'],
	sbtPlugin: function( id )
	{
		return 'addSbtPlugin( "' +
			dependencies[id].group + '" % "' +
			dependencies[id].artifact + '" % "' +
			dependencies[id].version +
		'" )';
	}
};