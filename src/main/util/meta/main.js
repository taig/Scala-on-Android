define( [ 'jquery' ], function( $ )
{
	var wndw = $( window ),
		meta = $( 'div.meta' ),
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
		if( event.keyCode === 27 && nav.hasClass( 'active' ) )
		{
			button.trigger( 'click' );
		}
	} );

	/**
	 * Click outside of navigation closes
	 */
	$( document ).on( 'click', function( event )
	{
		if( !$( event.target ).parents( '.meta' ).is( meta ) && meta.hasClass( 'active' ) )
		{
			button.trigger( 'click' );
		}
	} );
} );