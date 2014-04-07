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
        createAnswersInputs(word);
        this.answers.push(getAnswersInput());
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

function createAnswersInputs(word){
  var newWord = word.replace(/[{}]/g, "");
  var li = $("<li>");
  var input = $("<input>").attr("class", "new-word");
  var span = $("<span>").addClass("word-text").text(newWord + ":");
  $("#answers-ul").append(li).append(span).append(input);
}

function getAnswersInput(){
  $("#answer-text-label").submit(function(e){
    e.preventDefault();
    $("input[class=new-word]").each(function(){
      var th = $(this);
      console.log(th.val());
    });
  });
}

// function getAnswersInputs(word){
//   var newWord = word.replace(/[{}]/g, "");
//   var submission;
//   var wordText = $("#word-text");
//   console.log("hey " + newWord);
//   wordText.text(newWord + ":");
//   appendLiInputs();
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

// function appendLiInputs(){
//   var li = $("<li>");
//   var input = $("<input>").attr("id", "new-word");
//   var span = $("<span>").addClass("word-text").text(word + ":");
//   $("#answers-ul").append(li).append(span).append(input);
// }
// function answerEventListener(){
//   $("#answer-text-label").submit(function(e){
//     e.preventDefault();
//      submission = $("#answer-text").val();
//      console.log(submission);
//      this.reset();
//      wordText.text("");
//      return submission;
//   });
// }
