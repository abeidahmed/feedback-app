RSpec.shared_examples 'error' do
  it 'is expected to return error message' do
    expect(json[:message]).to_not be_nil
  end
end

RSpec.shared_examples 'invalid_email' do
  it 'is expected to render an error message' do
    expect(json.dig(:message, :error)).to match_array('Invalid email address')
  end
end

RSpec.shared_examples 'invalid_credentials' do
  it 'is expected to render an error message' do
    expect(json.dig(:message, :error)).to match_array('Invalid credentials')
  end
end