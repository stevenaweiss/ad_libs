require 'spec_helper'
require 'capybara/rspec'
require 'capybara/webkit/matchers'
Capybara.javascript_driver = :webkit


describe "an admin user can create a new story skeleton",:js => true do 
let(:user) { FactoryGirl.create(:user) }

  it "allows an admin to write in a new story" do 
    login(user)
    # visit(root_path)
    # save_and_open_page
    click_link "Add A New Story!"
    fill_in 'Title', :with => 'Magic'
    fill_in 'Category', :with => 'Magical Stories'
    fill_in 'Story text', :with => '{magic}'
    fill_in 'Number of ad words', :with => "1"
    click_button "Add!"
    # save_and_open_page
  end


  def login(user)
    visit(login_path)
    fill_in :email, with: user.email
    fill_in :password, with: user.password
    click_button "Log In!"
    save_and_open_page
  end

end
