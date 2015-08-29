libraryDependencies ++=
    {{ software.find( 'robotest' ).format() }} ::
    {{ software.find( 'scalatest' ).format() }} ::
    Nil

fork in Test := true