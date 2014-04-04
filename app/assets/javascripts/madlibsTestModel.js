function MadLib(lib, replacements){
  this.lib = lib;
  this.replacements = [];
}

MadLib.prototype.findWordsToReplace = function(){
  var wordsToReplace = this.lib.match(/{([^}]*)}/g);
  return wordsToReplace;
};

MadLib.prototype.fillIn = function(array){
  // console.log(this + "fillIn");
  for(var i=0; i<array.length;i++){
    this.replacements.push({
      key: this.findWordsToReplace()[i],
      value: array[i]});
  }
  // console.log(this + "TWO");
  var newLib = this.replacements.forEach(replaceWords);
  return newLib;
  // return this.replacements;
};

var replaceWords = function(index, key, value){
  console.log(this + "replaceWords");
  this.lib.replace(index.key, index.value);
};

var madLib = new MadLib("The {noun} walked through the {noun} while {verb}.");

var replacementWords = ["monkey", "cheese", "walking"];

// MadLib.prototype.fillIn = function(){

// };

// return this.lib.replace(/{([^}]*)}/g, function(key){
//     return this.createFillInHash()[key];
//   });
// return str.replace(/\[(\w+)\]/g, function(s, key) {
//    return reps[key] || s;
// });




