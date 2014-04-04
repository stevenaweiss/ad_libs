class StorySkeleton < ActiveRecord::Base
  validates_presence_of :title
  validates_presence_of :story_text
  validates_presence_of :category
  validates_presence_of :number_of_ad_words
end
