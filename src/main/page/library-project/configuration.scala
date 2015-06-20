import android.Plugin._

object	Build
extends	android.AutoBuild
{
	// Use settings = androidBuildApklib for apklib, respectively
	val aar = Project( "my-aar-project", file( "." ), settings = androidBuildAar )
		.settings(
			organization := "com.example",
			// @see https://github.com/pfn/android-sdk-plugin/issues/88
			sourceGenerators in Compile <<= ( sourceGenerators in Compile )( generators =>
			{
				Seq( generators.last )
			} ),
			version := "1.0.0"
		)
}