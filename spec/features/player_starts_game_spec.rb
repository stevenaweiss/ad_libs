require 'spec_helper'
require 'capybara/rspec'
require 'capybara/webkit/matchers'
Capybara.javascript_driver = :webkit

describe "a user can start a game", js: true do 

  it 'should not have JavaScript errors', :js => true do
    visit(root_path)
    expect(page).not_to have_errors
  end

  it "goes through the steps of creating a game",:js => true do 
    visit root_path
    find('#categories').find(:xpath, 'option[2]').select_option
    find('#number-of-players').find(:xpath, 'option[2]').select_option
    click_button("Start Game!")
    # expect(page).to have_content("animal")
    within("#answer-text-label") do 
      fill_in 'name', :with => 'Steve'
      save_and_open_page
      click_button("submit-answers")
      fill_in 'animal', :with => 'giraffe'
      click_button("submit-answers")
      fill_in 'food', :with => 'burger'
      click_button("submit-answers")
      fill_in 'something that smells terrible', :with => 'dead fish'
      click_button("submit-answers")
      fill_in 'exclamation', :with => 'wow'
      click_button("submit-answers")
    end
    expect(page).to have_content("Steve")
  end
end