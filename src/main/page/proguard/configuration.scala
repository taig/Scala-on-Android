proguardOptions in Android ++=
    // Don't remove anything from your app's code. This is especially useful during development!
    "-keep class com.example.** { *; }" ::
    // Keep certain library packages
    "-keep class com.squareup.okhttp.** { *; }" ::
    "-keep interface com.squareup.okhttp.** { *; }" ::
    // Ignore warnings raised from this class
    "-dontwarn okio.Okio" ::
    // Keep all test class
    "-keep class * extends org.scalatest.FunSuite" ::
    // Keep a certain field; being as specific as possible is good practice because it allows
    // ProGuard to remove as much unused code as possible which increases your distance to the
    // 65K barrier
    "-keepclassmembernames class com.some.library.Class { int someField; }" ::
    // I've read and understood all notes that are issued by this package
    "-dontnote org.scalatest.**" ::
    Nil