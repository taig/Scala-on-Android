proguardOptions in Android ++= Seq(
	"-keep class java.nio.file.Files { *; }"
)