// var Madlib = Backbone.Model.extend({
//   urlRoot: "/story_skeletons"
// });

// var MadlibCollection = Backbone.Collection.extend({
//   model: Madlib,
//   url: "/story_skeletons"
// });

// var MadlibView = Backbone.View.extend({
//   tagName: "p",

//   initialize: function(){
//     this.render();
//   },

//   events: {

//   },

//   findWordsToReplace: function(){

//   },

//   getAnswers: function(){

//   },

//   replaceWords: function(){

//   },

//   render: function(){
//     var template = $("script.template").html();
//     var rendered = _.template(template, { madlib: this.model });
//     this.$el.html(rendered);
//   }

// });

// $(document).ready(function() {
//   var madlibs = new MadlibCollection();
//   var madlibview = new MadlibView({collection: madlibs});
//   madlibs.fetch();
// });