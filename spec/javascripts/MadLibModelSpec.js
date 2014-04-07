describe("MadLib", function(){
  var newLib = new MadLib("hey {name}, go to {place}");

  it("retrieves the words to replace", function(){
    expect(newLib.findWordsToReplace()).toEqual(["{name}", "{place}"]);
  });

  it("replaces words", function(){
    newLib.answers = ["Steve", "hell"];
    expect(newLib.replaceWords()).toEqual("hey Steve, go to hell");
  });
});