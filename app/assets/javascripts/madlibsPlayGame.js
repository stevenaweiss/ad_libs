var newGame;

function playGame(){
  $("#add-story-link").remove();
  newGame = new MadLib(storyText);
  newGame.findWordsToReplace();
  newGame.getAnswers();
}

function afterAnswersSubmitted(){
  newGame.replaceWords();
  var home = $("<input type='button' id='play-again' value='Play Again!'>");
  var finishedStory = newGame.replaceWords();
  // $("#completed-story").effect("slide", 1000);
  $("#completed-story").append("<p>").append(finishedStory);
  // $("footer").append("<a href='/'> home!</a>");
  $("footer").append(home);

  home.on("click",function(){
  window.location.reload();
  });
  return finishedStory;
}

