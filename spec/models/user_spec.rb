require 'spec_helper'

describe User do
  before(:each) do
    User.create(
      name: "Steve Weiss",
      email: "steven.a.weiss@gmail.com", 
      password: "password", 
      password_confirmation: "password"
      )
  end

  it { should validate_presence_of :name }
  it { should validate_presence_of :email }
  it { should validate_uniqueness_of :email}
  it { should validate_presence_of :password_digest }


end
