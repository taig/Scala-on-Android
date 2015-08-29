import android.Plugin._

object Build extends sbt.Buil
{
    val main = Project( "my-aar-project", file( "." ), settings = androidBuildAar )
        .settings(
            organization := "com.example",
            version := "1.0.0"
        )
}