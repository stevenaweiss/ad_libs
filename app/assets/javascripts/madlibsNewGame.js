var titleAndId = [];
var storyTitle;
var selectedStoryId;
var storyText;

// retrieving story skeletons from DB to load in dropdown menu, adding form event listeners
function getStorySkeletons(){
  var allSkeletons = $.getJSON("/story_skeletons").done(
    function(){
      var skeletonTitleLength = allSkeletons.responseJSON.length;
      for (var i = 0; i < skeletonTitleLength; i++){
        var title = allSkeletons.responseJSON[i].title;
        var id = allSkeletons.responseJSON[i].id;
        titleAndId[i] = {
          key: title,
          val: id
        };
      }
      loadStoryTitles();
    }
  );
  formEventListener();
}

//loading story titles into dropdown menu
function loadStoryTitles(){
  for(var i = 0; i < titleAndId.length; i++)
    $("#categories").append($("<option>").attr("value", titleAndId[i]["key"]).append(titleAndId[i]["key"]));
  console.log("loading stories!");
}


//adding form event listeners, removing controls once game is started, getting the story id by matching it against the selected story title.  


function formEventListener(){

  $("#initiate-game").submit(function(e){
    e.preventDefault();
    storyTitle = $("#categories").val();
    numberOfPlayers = $("#number-of-players").val();
    console.log("Story title is " + storyTitle);
    $("#initiate-game").remove();
    for(var i = 0; i < titleAndId.length; i++)
      if(titleAndId[i]["key"] == storyTitle){
        selectedStoryId = titleAndId[i]["val"];
      }
      getStorySkeletonText();
      // playGame();
  });
}

//getting the chosen story skeleton from the DB by ID.  
function getStorySkeletonText(){
  var story = $.getJSON("/story_skeletons/" + selectedStoryId).done(
    function(){
      storyText = story.responseJSON.story_text;
    }
    );
  console.log(storyText);
  return storyText;
}

