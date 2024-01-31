// if you wanna see the source
// https://github.com/kuso-clan/kuso-clan.github.io
// not making my site ugly...

document.addEventListener( 'contextmenu',
  event => event.preventDefault()
);

$( function() {
  $( document ).keydown( function( objEvent ) {
    if( objEvent.ctrlKey ) {
      if( objEvent.shiftKey ) {
        if( objEvent.keyCode == 73 || objEvent.keyCode == 74 ||
            objEvent.keyCode == 75 || objEvent.keyCode == 67 )
          return false; // CTRL + SHIFT + I / J / K / C
      } else {
        if( objEvent.keyCode == 65 || objEvent.keyCode == 85 )
          return false; // CTRL + A / U
      }
    }
    if( objEvent.keyCode == 123 )
		  return false;// F12
  });
});