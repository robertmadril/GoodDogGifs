
var topics = ["Golden Retriever", "Pug", "Australian Shepard", "Yellow Lab", "Chocolate Lab", "Irish Setter", "German Shepard", "Chihuahua", "Shih Tzu", "Greyhound", "Cocker Spaniel", "Labradoodle"]

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
      var stillUrl = r.data[i].images.fixed_height_still.url;
      var newImg = $("<img>");
      newImg.attr("src", stillUrl);
      newImg.attr("data-gif", r.data[i].images.fixed_height.url);
      newImg.attr("data-still", stillUrl);
      newImg.attr("data-state", "still");
      newImg.addClass("gif");
      newDiv.append("<p>Rating: " + r.data[i].rating + "</p>");
      newDiv.append(newImg);
      newDiv.addClass("gif-con");
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
  
  $("#add-dog").on("click", function(event) {

    event.preventDefault();

    $("#btn-container").empty();
    var dogs = $("#dog-input").val().trim();
    topics.push(dogs);
    renderButtons();
  })
}


function apiCall() {
    var topic = $(this).attr("data-value");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=wD9RCoqUkLgKpp0XRh2N0rvmJLXRvSZ9&limit=10";

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