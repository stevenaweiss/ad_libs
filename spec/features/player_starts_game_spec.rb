require 'spec_helper'
require 'capybara/rspec'
require 'capybara/webkit/matchers'
Capybara.javascript_driver = :webkit


describe "a user can start a game", js: true do 
  # before(:all) do 

  # end

  it 'should not have JavaScript errors', :js => true do
    visit(root_path)
    expect(page).not_to have_errors
  end

  it "goes through the steps of creating a game",:js => true do 
    visit root_path
    save_and_open_page
    find('#categories').find(:xpath, 'option[2]').select_option
    # find('#number-of-players').find(:xpath, 'option[2]').select_option
    click_button("Start Game!")
  end
end