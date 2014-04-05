require 'spec_helper'

describe "a user can start a game" do 

  it "goes through the steps of creating a game" do 
    visit root_path
    find_field('categories').find('option[story-1]').text
  end
end