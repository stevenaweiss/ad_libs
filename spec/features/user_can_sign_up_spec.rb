require 'spec_helper'
require 'capybara/rspec'
require 'capybara/webkit/matchers'
Capybara.javascript_driver = :webkit

describe "a user can sign up" do 

  it "takes a user through the process of signing up" do 
    visit root_path
    click_link "Sign Up"

  end
end
