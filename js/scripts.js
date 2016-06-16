$(document).ready(function() {
  $("#survey form").submit(function(event) {
    var nameInput = $("#name").val();
    var beverageInput = $("#beverage").val();
    var musicInput = $("input:radio[name=music]:checked").val();
    var dobInput = $("#born").val();
    var favoriteColorInput = $("#color").val();
    $("#output").text("Hello " + nameInput + " you like " + beverageInput)

    event.preventDefault();
  });
});
