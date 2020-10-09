module SessionsHelper
  def current_user
    header = request.headers['Authorization']
    unless header.blank?
      @token = header.sub('Bearer ', '')
      id = Token.new(token: @token).decode.first['user_id']
      @current_user ||= User.find(id)
    end
  end

  def user_signed_in?
    !!current_user
  end

  def current_user?(user)
    current_user == user
  end

  def authenticate_user!
    return error('unauthorized') unless user_signed_in?
  end
end