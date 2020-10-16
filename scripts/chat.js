// Define message data structure.
class Message {
  constructor(user, date, content) {
    this.user = user;
    this.date = date;
    this.content = content;

    // TODO: Extend these properties?
  }
}

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

  $("#sendButton").click(function () {
    // Get appropriate values.
    let username = "goel@chat.com";
    let date = new Date();
    let content = $("#messageBox").val();

    // Create a message.
    var message = new Message(username, date, content);
    console.log("Constructed message: ", message);
  });
});
