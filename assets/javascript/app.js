var topics = ["Hamburgers", "Pizza", "Mac and Cheese", "Pasta", "Tacos"]

function renderButtons() {
    for (i=0; i<topics.length; i++) {
        var newBtn = $("<button>")
        newBtn.addClass("topic");
        newBtn.attr("data-value", topics[i]);
        newBtn.text(topics[i]);
        $("#btn-container").append(newBtn);
    }
}

function renderGif(r) {
    $("#gif-container").empty();
    for (i=0; i<r.data.length; i++) {
      var newDiv = $("<div>");
      var stillUrl = r.data[i].images.fixed_height_small_still.url;
      var newImg = $("<img>");
      newImg.attr("src", stillUrl);
      newImg.attr("data-gif", r.data[i].images.fixed_height_small.url);
      newImg.attr("data-still", stillUrl);
      newImg.attr("data-state", "still");
      newImg.addClass("gif");
      newDiv.append(newImg);
      newDiv.append("<p>Rating: " + r.data[i].rating + "</p>");
      $("#gif-container").append(newDiv);
    }
}

function animate() {
  $(".gif").on("click", function(r) {

    var state = $(this).attr("data-state");

    if (state === "still") {
    var gif = $(this).attr("data-gif");
    $(this).attr("src", gif);
    $(this).attr("data-state", "animate");
    }
    else {
      var still = $(this).attr("data-still");
      $(this).attr("src", still);
      $(this).attr("data-state", "still");
    }
  })
}

function inputBtn() {
  
  $("#add-food").on("click", function(event) {

    event.preventDefault();

    $("#btn-container").empty();
    var food = $("#food-input").val().trim();
    topics.push(food);
    renderButtons();
    console.log("works");
  })
}


function apiCall() {
    var topic = $(this).attr("data-value");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=wD9RCoqUkLgKpp0XRh2N0rvmJLXRvSZ9&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        renderGif(response);
        animate(response);
      }); 
}

renderButtons();
inputBtn();
$(document).on("click", ".topic", apiCall);

/*
To-Do
Styling
*/