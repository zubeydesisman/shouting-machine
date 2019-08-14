$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var shoutOut = $("input#person1").val();
    $("#whatyousay").text(shoutOut.toUpperCase());

    event.preventDefault();
  });
});
