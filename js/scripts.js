$(document).ready(function() {
  var height = parseInt(prompt("What is your height in cm"));

  if(height < 140) {
    $(".kids").show();
  } else {
    $(".adults").show();
  }

});
