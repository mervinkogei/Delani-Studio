$(document).ready(function(){
$( "#blank form" ).submit(function( event ) {
 $( "input" ).first().val();
 $( "input" ).email().val();
   
    $( "span" ).text("" ).show().fadeOut( 1000 );
    event.preventDefault();
  });
});
  