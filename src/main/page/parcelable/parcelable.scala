import android.os.{ Parcel, Parcelable }

case class User( age: Int, name: String ) extends Parcelable
{
	protected this( source: Parcel ) = this( source.readInt(), source.readString() )

	override def describeContents() = 0

	override def writeToParcel( destination: Parcel, flags: Int )
	{
		destination.writeInt( age )
		destination.writeString( name )
	}
}

object User
{
	// This is by contract, the CREATOR field must exist for every class that implements
	// the Parcelable interface.
	override val CREATOR = new Parcelable.Creator[User]
	{
		override def createFromParcel( source: Parcel ) = new User( source )

		override def newArray( size: Int ) = new Array[User]( size )
	}
}