RSpec.shared_examples 'error' do
  it 'is expected to return error message' do
    expect(json[:message]).to_not be_nil
  end
end