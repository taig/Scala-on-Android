class MyActivity extends Activity with TypedActivity
{
	override def onCreate( savedInstanceState: Bundle ) =
	{
		super.onCreate( savedInstanceState )

		setContentView( R.layout.main )

		val title = findView( TR.my_title )
		title.setText( "Hello Scala!" )
	}
}