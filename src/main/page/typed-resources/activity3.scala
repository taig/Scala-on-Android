class MyActivity extends Activity with TypedActivity
{
	lazy val title = findView( TR.my_title )

	override def onCreate( savedInstanceState: Bundle ) =
	{
		super.onCreate( savedInstanceState )

		setContentView( R.layout.main )

		title.setText( "Hello Scala!" )
	}

	override def onResume() =
	{
		super.onResume()

		title.setText( "Welcome back, Scala!" )
	}
}