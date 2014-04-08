describe("MadLib", function(){
  var newLib;

  beforeEach(function(){
    newLib = new MadLib("hey {name}, go to {place}");
  });

  describe("#findWordsToReplace", function(){
    it("retrieves the words to replace", function(){
      newLib.findWordsToReplace();
      expect(newLib.adWords).toEqual(["{name}", "{place}"]);
    });
  });

  describe("#replaceWords", function(){
    it("replaces words", function(){
      newLib.answers = ["Steve", "hell"];
      expect(newLib.replaceWords()).toEqual("hey Steve, go to hell");
    });
  });

  describe("#getNextAdWord", function(){
    beforeEach(function(){
      newLib = new MadLib("hey {name}, go to {place}");
      newLib.findWordsToReplace();
    });

    it("gets the first word in the madlib on first call", function(){
      expect(newLib.getNextAdWord()).toEqual("{name}");
    });

    it("gets the next word in madlib in subsequent calls", function(){
      newLib.getNextAdWord();
      expect(newLib.getNextAdWord()).toEqual("{place}");
    });

    it("returns false when no more are left", function(){
      newLib.getNextAdWord();
      newLib.getNextAdWord();
      expect(newLib.getNextAdWord()).toBe(false);
    });
  });
});