var allTitles = [];


function getStorySkeletons(){
  // console.log("trying to get");
  var allSkeletons = $.getJSON("/story_skeletons").done(
    function(){
      var skeletonTitleLength = allSkeletons.responseJSON.length;
      for (var i = 0; i < skeletonTitleLength; i++){
        var title = allSkeletons.responseJSON[i].title;
        allTitles.push(title);
        // console.log(title);
      }
    }
  );
}

function loadStoryTitles(){
  for(var i = 0; i <= allTitles.length; i++)
    $("#categories").append($("<option>").attr("value", allTitles[i]).append(allTitles[i]));

    $("#initiate-game").submit(function(e){
    e.preventDefault();
    console.log("submittinnnnnng!");
    var storyTitle = $("#categories").val();
    console.log("this is " + storyTitle);
    $("#initiate-game").remove();
    });
}

// $("#initiate-game").submit(function(e){
//   e.preventDefault();
//   console.log("submittinnnnnng!");
//   var storyTitle = $("#categories").val();
//   console.log("this is " + storyTitle);
// });

