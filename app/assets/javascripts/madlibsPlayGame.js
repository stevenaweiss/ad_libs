var newGame;

function playGame(){
  $("#add-story-link").remove();
  newGame = new MadLib(storyText);
  newGame.findWordsToReplace();
  createAnswersInputs(newGame.getNextAdWord());
  addSubmitListener();
}

function addSubmitListener() {
  $("#answer-text-label").submit(function(e){
    e.preventDefault();
    var newWord = $("input[class=new-word]");
    newGame.answers.push(newWord.val());
    $("input.new-word")
      .attr("disabled", true)
      .removeClass("new-word")
      .addClass("old-word");
    createAnswersInputs(newGame.getNextAdWord());
  });
}

//appending a new text field for each word to replace 
function createAnswersInputs(word){
  var playersInteger = parseInt(numberOfPlayers,0);
  if (word !== false) { // ie, there is an answer to create
    var newWord = word.replace(/[{}]/g, "");
    var li = $("<li>");
    var input = $("<input>").attr("class", "new-word").attr("id", newWord).attr("required", true);
    var span = $("<span>").addClass("word-text").text(newWord + ":");
    $("#answers-ul").append(li).append(span).append(input);
    input.focus();
  } else { // end of words
    afterAnswersSubmitted();
  }
}

function afterAnswersSubmitted(){
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

