var topics = ["Hamburgers", "Pizza", "Mac and Cheese", "Pasta", "Tacos", "More Food Here"]


/*

Pseudocode:

User can add free text search and button will be added/move on to display
Returned GIF API call will append 10 relevant gif's to gif-container, all static.
If user clicks on gif's, they will animate.
If user clicks on another gif or the same gif, animation will stop.
User clicks new button or searches and 10 new gifs will appear in gif-container.

*/

function renderButtons() {
    for (i=0; i<topics.length; i++) {
        var newBtn = $("<button>")
        newBtn.addClass("topic");
        newBtn.attr("data-value", topics[i]);
        newBtn.text(topics[i]);
        $("#btn-container").append(newBtn);
    }
}

function apiCall() {
    var topic = $(this).attr("data-value");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=wD9RCoqUkLgKpp0XRh2N0rvmJLXRvSZ9&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

      }); 
}

renderButtons();
$(document).on("click", ".topic", apiCall);