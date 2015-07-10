resolvers ++=
	"RoboTest releases" at "https://raw.github.com/zbsz/mvn-repo/master/releases/" ::
	// Necessary to resolve Robolectric 3.0 snapshot
	Resolver.sonatypeRepo( "snapshots" ) ::
	Nil

libraryDependencies ++=
	{{ software.find( 'robotest' ).format() }} ::
	{{ software.find( 'scalatest' ).format() }} ::
	Nil

fork in Test := true