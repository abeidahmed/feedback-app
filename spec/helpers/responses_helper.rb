module ResponsesHelper
  def json
    JSON.parse(response.body, symbolize_names: true)
  end

  def default_header
    {
      'Authorization' => nil,
      'Content-Type' => 'application/json'
    }
  end

  def auth_header(user)
    {
      'Authorization' => "Bearer #{Token.new(user_id: user.id).encode}",
      'Content-Type' => 'application/json'
    }
  end
end