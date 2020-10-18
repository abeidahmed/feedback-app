require 'rails_helper'

RSpec.describe Invitable, type: :model do
  it { should belong_to(:invitee) }

  it { should belong_to(:user).optional }
end
