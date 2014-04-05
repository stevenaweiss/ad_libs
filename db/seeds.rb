# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
StorySkeleton.delete_all

StorySkeleton.create(story_text:"Today in {location}, legendary politician {political figure} shocked supporters with the announcement of a joint venture with {tech company}.  Word on the street is, it will be the {social network} for {animal}s.", title:"New Tech Venture", category: "Tech", number_of_ad_words: 5)
StorySkeleton.create(story_text:"Suddenly {name} woke up in an unfamiliar place, a {animal} trotting around the room, a half eaten {food} next to him, and for some reason, everything smelled like {something that smells terrible}.  All he could do was exclaim {exclamation}!", title:"Blackout!", category: "Life", number_of_ad_words: 5)
StorySkeleton.create(story_text:"The hottest new trend, straight out of {NY Neighborhood}, jumping on the artisinal bandwagon is {color} {country}, the fancy new name for {animal} {body part}.  The trend comes from chef {name} {US state} of famed restaurant {noun}.", title:"Artisinal", category: "Food", number_of_ad_words: 7)
StorySkeleton.create(story_text:"Dateline {US City}. In shocking news {celebrity} announced today that they would be denouncing all previous career choices and choosing to focus on {adverb} exclusively.  I've always wanted to be a {career} and this seems like the best choice.  {expletive} all the haters who say otherwise.", title:"Celebrity News", category: "Celebrity", number_of_ad_words: 5)

