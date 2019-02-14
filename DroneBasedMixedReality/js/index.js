$(function() {
  document.getElementById("playbutton").disabled = true;
  var player = $('iframe');
  var playerOrigin = '*';
  // Listen for messages from the player
  if (window.addEventListener) {
    window.addEventListener('message', onMessageReceived, false);
  } else {
    window.attachEvent('onmessage', onMessageReceived, false);
  }

  function onMessageReceived(event) {
    var data = JSON.parse(event.data);
    console.log(data.event);
    if (data.event === "ready") {
      //attach ready function to the image
      document.getElementById("playbutton").disabled = false;

      $('#playbutton').click(function() {
        player[0].contentWindow.postMessage({
          "method": "play"
        }, playerOrigin);

        $(this).fadeOut(600, function() { $(this).remove(); });
      });

    }
  }
});
