describe("MadLib", function(){
  it("retrieves the words to replace", function(){
    var newLib = new MadLib("hey {name}, go to {place}");
    expect(newLib.findWordsToReplace).toEqual(["{name}", "{place}"]);
  });
});