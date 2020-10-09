class Token
  SECRET_KEY = Rails.application.secrets.secret_key_base

  def initialize(token: nil, **hash)
    @token = token
    @hash = hash
  end

  def encode
    JWT.encode @hash, SECRET_KEY, "HS256"
  end

  def decode
    JWT.decode @token, SECRET_KEY, true, { algorithm: "HS256" }
  end
end