// *------------User-Interface Logic-------------*

$(document).ready(function() {

  $("form#survey").submit(function(event) {
    // Input Variables
    var firstName = $("#fname").val();
    var lastName = $("#lname").val();
    var favePet = $("#pet").val();
    var faveMovie = $("input:radio[name=movie]:checked").val();
    var dob = $("#born").val();
    var faveColor = $("#color").val();

    event.preventDefault();
    $(".fname-output").text(firstName);
    $(".lname-output").text(lastName);
    $(".pet-output").text(favePet);
    $(".movie-output").text(faveMovie);
    $(".dob-output").text(dob);
    $(".color-output").text(faveColor);
    $(".color-block").css("background-color", faveColor).show();
  });
});
