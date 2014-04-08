//the Mad Lib model, initialized with a lib - the story text - 
function MadLib(libText){
  this.libText = libText;
  this.answers = [];
  this.iterator = 0;
}

//finding all words to replace by matching all characters within {}
MadLib.prototype.findWordsToReplace = function(){
  this.adWords = this.libText.match(/{([^}]*)}/g);
};

MadLib.prototype.getNextAdWord = function(){
  var currentWord;
  if (this.iterator < this.adWords.length) {
    currentWord = this.adWords[this.iterator];
    this.iterator++;
    return currentWord;
  } else {
    return false;
  }
};

// prompting user for answers with the word to replace, saving those answers to an array
// MadLib.prototype.getAnswers = function(){
//   var findWords = this.findWordsToReplace();
//     findWords.forEach(function(word){
//         createAnswersInputs(word);
      // setTimeout(3000);
//       }, this);
//   this.answers = getAnswersInput();
//   return this.answers;
// };
//appending a new text field for each word to replace 
// function createAnswersInputs(word){
//   var playersInteger = parseInt(numberOfPlayers);
//   var newWord = word.replace(/[{}]/g, "");
//   var li = $("<li>");
//   var input = $("<input>").attr("class", "new-word").attr("id", newWord).attr("required", true);
//   var span = $("<span>").addClass("word-text").text(newWord + ":");
//   $("#answers-ul").append(li).append(span).append(input);
// }

// //alternate getAnswers, trying to integrate multiple users
MadLib.prototype.getAnswer = function(){
  var findWords = this.findWordsToReplace();
};

//replacing all characters within {} with the answers array
MadLib.prototype.replaceWords = function(){
  this.answers.forEach(function(answer){
    this.libText = this.libText.replace(/{([^}]*)}/, answer);
  }, this);
  console.log("replaceWords is running");
  return this.libText;
};





