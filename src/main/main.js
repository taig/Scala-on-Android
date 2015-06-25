require( [ 'jquery', 'include/main', 'util/main' ], function( $ )
{
	// Replace UTC time string with local date format
	$( '.meta .date' ).each( function()
	{
		var date = new Date( $( this ).html() );
		$( this ).html( date.toLocaleString() );
	} );
} );