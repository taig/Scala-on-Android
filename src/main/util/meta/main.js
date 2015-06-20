define( [ 'jquery' ], function( $ )
{
	var meta = $( 'div.meta' ),
		button = meta.find( 'button' );

	/**
	 * Toggle box
	 */
	button.on( 'click', function( event )
	{
		event.preventDefault();

		$( this ).parents( '.meta' ).toggleClass( 'active' );
	} );

	/**
	 * Escape key closes
	 */
	$( document ).on( 'keyup', function( event )
	{
		if( event.keyCode === 27)
		{
			meta.filter( '.active' ).find( 'button' ).trigger( 'click' );
		}
	} );

	/**
	 * Click outside of navigation closes
	 */
	$( document ).on( 'click', function( event )
	{
		var parent = $( event.target ).parents( '.meta.active' );
		meta.filter( '.active' ).not( parent ).find( 'button' ).trigger( 'click' );
	} );
} );