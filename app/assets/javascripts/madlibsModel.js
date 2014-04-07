//the Mad Lib model, initialized with a lib - the story text - 
function MadLib(libText){
  this.libText = libText;
  this.answers = [];
}

//finding all words to replace by matching all characters within {}
MadLib.prototype.findWordsToReplace = function(){
  var wordsToReplace = this.libText.match(/{([^}]*)}/g);
  return wordsToReplace;
};

//prompting user for answers with the word to replace, saving those answers to an array
MadLib.prototype.getAnswers = function(){
  var findWords = this.findWordsToReplace();
    findWords.forEach(function(word){
        createAnswersInputs(word);
      }, this);
  this.answers = getAnswersInput();
  return this.answers;
};

//replacing all characters within {} with the answers array
MadLib.prototype.replaceWords = function(){
  this.answers.forEach(function(answer){
    this.libText = this.libText.replace(/{([^}]*)}/, answer);
  }, this);
  console.log("replaceWords is running");
  return this.libText;
};

//appending a new text field for each word to replace 
function createAnswersInputs(word){
  var newWord = word.replace(/[{}]/g, "");
  var li = $("<li>");
  var input = $("<input>").attr("class", "new-word").attr("id", newWord);
  var span = $("<span>").addClass("word-text").text(newWord + ":");
  $("#answers-ul").append(li).append(span).append(input);
}

//pushing the text field responses to the answers array 
function getAnswersInput(){
  var inputAnswers = [];
  var form = $("#answer-text-label");

  $("#answer-text-label").submit(function(e){
    e.preventDefault();
    $("input[class=new-word]").each(function(){
      var th = $(this);
      inputAnswers.push(th.val());
      // console.log(inputAnswers);
      form.remove();
    });
    afterAnswersSubmitted();
  });

  return inputAnswers;
}


