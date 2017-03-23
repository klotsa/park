$(document).ready(function() {
  var height = parseInt(prompt("What is your height in cm"));

  if(height < 140) {
    $(".kids").show();
    $(".all").show();
    $("#thomas").addClass("green-text");
    $("#batman").addClass("green-text");
  } else {
    $(".adults").show();
    $(".all").show();
    $(".crazyHorse").addClass("red-text");
  }

});
