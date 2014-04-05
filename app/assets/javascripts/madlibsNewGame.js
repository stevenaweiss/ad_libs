// var allTitles = [];
// var allIds = [];
var titleAndId = [];
var storyTitle;
var selectedStoryId;

function getStorySkeletons(){
  // console.log("trying to get");
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
    }
  );
  $("#initiate-game").submit(function(e){
    e.preventDefault();
    storyTitle = $("#categories").val();
    console.log("Story title is " + storyTitle);
      for(var i = 0; i <= titleAndId.length; i++)
        if(titleAndId[i]["key"] == storyTitle){
          selectedStoryId = titleAndId[i]["val"];
      }
    $("#initiate-game").remove();
    });
}

function loadStoryTitles(){
  for(var i = 0; i <= titleAndId.length; i++)
    $("#categories").append(
      $("<option>").attr("value", titleAndId[i]["key"]).append(titleAndId[i]["key"])
      );

}


function getStorySkeletonText(){
  var story = $.getJSON("/story_skeletons/" + selectedStoryId).done(
    function(){
      storyText = story.responseJSON.story_text;
    }
  );
  return story;
}

