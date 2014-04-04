class CreateStorySkeletons < ActiveRecord::Migration
  def change
    create_table :story_skeletons do |t|
      t.string :category
      t.string :title
      t.text :story_text
      t.integer :number_of_ad_words

      t.timestamps
    end
  end
end
