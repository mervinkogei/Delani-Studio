$(document).ready(function() {
  $(".img1").click(function() {
    $("#design1").toggle();
      });
});
$(document).ready(function() {
  $(".img2").click(function() {
    $("#design2").toggle();
      });
});
$(document).ready(function() {
  $(".img3").click(function() {
    $("#design3").toggle();
      });
});

$(document).ready(function(){
  $("form").submit(function(event){
    var name=$("input#name").val();
  alert("Hello "+ name + " Thank you for contacting us");

  event.preventDefault();
  });
 });