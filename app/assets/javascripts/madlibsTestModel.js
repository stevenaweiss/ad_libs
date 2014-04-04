function MadLib(lib){
  this.lib = lib;
  this.answers = [];
}

MadLib.prototype.findWordsToReplace = function(){
  var wordsToReplace = this.lib.match(/{([^}]*)}/g);
  return wordsToReplace;
};

MadLib.prototype.getAnswers = function(array){
  this.findWordsToReplace().forEach(function(word){
      var answer = prompt(word);
      this.answers.push(answer);
    }, this);
  return this.answers;
};

MadLib.prototype.replaceWords = function(){
  this.answers.forEach(function(answer){
    this.lib = this.lib.replace(/{([^}]*)}/, answer);
  }, this);
  return this.lib;
};

var madLib = new MadLib("The {noun} walked through the {noun} while {adverb}.");

// var replacementWords = ["monkey", "cheese", "walking"];





