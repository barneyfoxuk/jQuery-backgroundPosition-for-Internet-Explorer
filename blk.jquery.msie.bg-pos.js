/*!
 * jQuery backgroundPosition for MSIE
 *
 * @author: Brandon Lee Kitajchuk
 * http://blkcreative.com
 *
 * @use: keep this comment with the code
 * 
 */
(function ( $ ) {

if ( $.browser.msie ) {
	$.cssHooks.backgroundPosition = {
		get: function ( elem, computed, extra ) {
			var $elem	= $( elem ),
				posX	= $elem.css( "backgroundPositionX" ),
				posY	= $elem.css( "backgroundPositionY" );
			
			return posX + " " + posY;
		},
		
		set: function ( elem, value ) {
			var $elem	= $( elem ),
				values	= value.split( " " ),
				posX	= values[0],
				posY	= values[1];
				
			$elem.css({
				"backgroundPositionX": posX,
				"backgroundPositionY": posY
			});
		}
	};
}

})( jQuery );