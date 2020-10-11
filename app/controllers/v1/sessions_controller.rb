class V1::SessionsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:create]

  def create
    @user = User.find_by_credentials(email, password)

    if @user.nil?
      render json: { message: 'Invalid credentials' }, status: :bad_request
    else
      @token = Token.new(user_id: @user.id).encode
      render :new
    end
  end

  def show
    @current_user = current_user
    render :show
  end

  private
  def email
    params.dig(:user, :email)
  end

  def password
    params.dig(:user, :password)
  end
end
