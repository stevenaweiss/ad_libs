require 'spec_helper'

describe StorySkeleton do
  it { should validate_presence_of :category }
  it { should validate_presence_of :title }
  it { should validate_presence_of :story_text }
  it { should validate_presence_of :number_of_ad_words }

end