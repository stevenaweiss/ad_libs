require 'spec_helper'
require 'capybara/rspec'
require 'capybara/webkit/matchers'
Capybara.javascript_driver = :webkit


describe "an admin user can create a new story skeleton" do 

  it "allows an admin to write in a new story" do 
    visit(root_path)
    click_link "Add A New Story!"

  end
end
