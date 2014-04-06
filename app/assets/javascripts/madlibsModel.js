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
        // var answer = prompt(word);
        var answer = getAnswersInputs(word);
        this.answers.push(answer);
      }, this);
  return this.answers;
};

//replacing all characters within {} with the answers array
MadLib.prototype.replaceWords = function(){
  this.answers.forEach(function(answer){
    this.libText = this.libText.replace(/{([^}]*)}/, answer);
  }, this);
  return this.libText;
};


// function getAnswersInputs(word){
//   var newWord = word.replace(/[{}]/g, "");
//   var submission;
//   var wordText = $("#word-text");
//   console.log("hey " + newWord);
//   wordText.text(newWord + ":");
//   $("#answer-text-label").submit(function(e){
//     e.preventDefault();
//      submission = $("#answer-text").val();
//      console.log(submission);
//      this.reset();
//      wordText.text("");
//      return submission;
//   });
//   return submission;
// }

function getAnswersInputs(word){
  var newWord = word.replace(/[{}]/g, "");
  var li = $("<li>");
  var input = $("<input>").attr("id", newWord);
  var span = $("<span>").addClass("word-text").text(word + ":");
  $("#answers-ul").append(li).append(span).append(input);
}
