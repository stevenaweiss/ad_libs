var newGame;

function playGame(){
  newGame = new MadLib(storyText);
  newGame.findWordsToReplace();
  newGame.getAnswers();
}

function afterAnswersSubmitted(){
  newGame.replaceWords();

  var finishedStory = newGame.replaceWords();
  // $("#completed-story").effect("slide", 1000);
  $("#completed-story").append("<p>").append(finishedStory);

  return finishedStory;
}