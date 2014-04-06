// var newGame = new MadLib(storyText);

function playGame(){
  var newGame = new MadLib(storyText);

  newGame.findWordsToReplace();

  newGame.getAnswers();

  newGame.replaceWords();

  var finishedStory = newGame.replaceWords();

}

appendStory = function(){

  $("body").append("<p>").append(finishedStory);

};