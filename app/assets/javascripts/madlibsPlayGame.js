var newGame;

function playGame(){
  $("#add-story-link").remove();
  newGame = new MadLib(storyText);
  newGame.findWordsToReplace();
  newGame.getAnswers();
}

function afterAnswersSubmitted(){
  newGame.replaceWords();

  var finishedStory = newGame.replaceWords();
  // $("#completed-story").effect("slide", 1000);
  $("#completed-story").append("<p>").append(finishedStory).append("<a href='/'>");
  // $("body").append("<a href='/'>");
  return finishedStory;
}