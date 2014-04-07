var newGame;

function playGame(){
  newGame = new MadLib(storyText);
  newGame.findWordsToReplace();
  newGame.getAnswers();


}


  // newGame.replaceWords();

  // var finishedStory = newGame.replaceWords();

  // $("#completed-story").append("<p>").append(finishedStory);

  // return finishedStory;