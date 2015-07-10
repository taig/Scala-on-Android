class MyActivity extends Activity
{
	override def onCreate( savedInstanceState: Bundle ) =
	{
		super.onCreate( savedInstanceState )

		setContentView( R.layout.main )

		val title = findViewById( R.id.my_title ).asInstanceOf[TextView]
		title.setText( "Hello Scala!" )
	}
}