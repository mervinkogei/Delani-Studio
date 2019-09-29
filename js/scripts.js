$(document).ready(function() {
  $(".img1").click(function() {
    $("#design1").toggle();
    $(".img1").toggle();
  });
});
$(document).ready(function() {
  $(".design").click(function() {
    $(".img1").show();
    $("#design1").hide();
  });
});

$(document).ready(function() {
  $(".img2").click(function() {
    $("#design2").toggle();
    $(".img2").toggle();
  });
});
$(document).ready(function() {
  $(".development").click(function() {
    $(".img2").show();
    $("#design2").hide();
  });
});

$(document).ready(function() {
  $(".img3").click(function() {
    $("#design3").toggle();
    $(".img3").toggle();
  });
});

$(document).ready(function() {
  $(".product").click(function() {
    $(".img3").show();
    $("#design3").hide();
  });
});

$(document).ready(function() {
  $("form").submit(function(event) {
    var name = $("input#name").val();
    alert("Hello " + name + " Thank you for contacting us");

    event.preventDefault();
  });
});
