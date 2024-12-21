$( document ).ready( function() {
  var fade = function() {
    $('#jap').fadeTo( 1000, .3 ).fadeTo( 1000, .8, fade );
  };

  fade();
});
