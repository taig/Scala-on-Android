import android.os.Parcel;
import android.os.Parcelable;

public class User implements Parcelable
{
	private int age;

	private String name;

	// Getters and Setters

	public User( int age, String name )
	{
		this.age = age;
		this.name = name;
	}

	protected User( Parcel source )
	{
		this( source.readInt(), source.readString() )
	}

	@Override
	public int describeContents() { return 0; }

	@Override
	public void writeToParcel( Parcel destination, int flags )
	{
		destination.writeInt( age );
		destination.writeString( name );
	}

	// Implemented by contract, if this field is not around you will encounter runtime
	// exceptions
	public static final Parcelable.Creator<User> CREATOR = new Parcelable.Creator<User>()
	{
		public User createFromParcel( Parcel source ) { return new User( source ); }

		public User[] newArray( int size ) { return new User[size]; }
	};
}