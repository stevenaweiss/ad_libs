require 'spec_helper'
require 'capybara/rspec'
require 'capybara/webkit/matchers'
Capybara.javascript_driver = :webkit

describe "a user can sign up" do 

  it "allows an admin to log in" do 
    visit root_path
    click_link "Log In Admin"
  end
end
