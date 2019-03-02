var topics = ["Hamburgers", "Pizza", "Mac and Cheese", "Pasta", "Tacos", "More Food Here"]


/*

Pseudocode:

User can add free text search and button will be added/move on to display
When user clicks on button, that button topic will call to the GIF API with specific topic, amount
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

renderButtons();