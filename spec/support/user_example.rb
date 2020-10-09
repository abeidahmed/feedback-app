RSpec.shared_examples 'user_token' do
  it 'is expected to return user token' do
    expect(json[:token]).to_not be_nil
  end
end