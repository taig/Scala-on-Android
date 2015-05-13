define( [ 'jquery' ], function( $ )
{
	var wndw = $( window ),
		nav = $( 'body > header > nav' ),
		button = nav.find( '> a' ),
		shadow = nav.find( '.shadow' ),
		wrapper = shadow.find( '.wrapper' ),
		list = wrapper.find( '> ol' ),
		height = list.outerHeight();

	/**
	 * Calculate navigation height (and adjust on resize)
	 */
	wndw.on( 'resize.navigation', function()
	{
		shadow.css( 'height', Math.min( height, wndw.height() * 0.75 ) );
		list.trigger( 'scroll' );
	} );

	wndw.trigger( 'resize.navigation' );

	wrapper.addClass( 'top' );

	if( height <= wrapper.outerHeight() )
	{
		wrapper.addClass( 'bottom' );
	}

	/**
	 * Toggle navigation
	 */
	button.on( 'click', function( event )
	{
		event.preventDefault();

		nav.toggleClass( 'active' );
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
		if( !$( event.target ).parents( 'nav' ).is( nav ) && nav.hasClass( 'active' ) )
		{
			console.log( 'click outside of stuff, therefore go an hide!' );
			button.trigger( 'click' );
		}
	} );

	/**
	 * Toggle top and bottom scroll indicators
	 */
	list.on( 'scroll', function()
	{
		if( this.scrollTop === 0 && !wrapper.hasClass( 'top' ) )
		{
			wrapper.addClass( 'top' );
		}
		else if( this.scrollTop > 0 && wrapper.hasClass( 'top' ) )
		{
			wrapper.removeClass( 'top' );
		}

		if( this.offsetHeight + this.scrollTop >= this.scrollHeight && !wrapper.hasClass( 'bottom' ) )
		{
			wrapper.addClass( 'bottom' );
		}
		else if( this.offsetHeight + this.scrollTop < this.scrollHeight && wrapper.hasClass( 'bottom' ) )
		{
			wrapper.removeClass( 'bottom' );
		}
	} );
} );