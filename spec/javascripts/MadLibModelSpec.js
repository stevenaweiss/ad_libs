describe("MadLib", function(){
  var newLib = new MadLib("hey {name}, go to {place}");

  it("retrieves the words to replace", function(){
    expect(newLib.findWordsToReplace()).toEqual(["{name}", "{place}"]);
  });


});