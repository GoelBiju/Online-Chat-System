$(function () {
  // Enable/disable send button ensuring there
  // message text to send.
  $("#messageBox").keyup(function () {
    let currText = $("#messageBox").val();
    if (currText.length > 0) {
      $("#sendButton").prop("disabled", false);
    } else {
      $("#sendButton").prop("disabled", true);
    }
  });
});
