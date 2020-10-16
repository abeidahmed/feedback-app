class V1::PasswordResetsController < ApplicationController
  skip_before_action :authenticate_user!

  def create
    user = User.find_by_email(params.dig(:user, :email))

    if user
      user.initialize_password_reset
    else
      render json: { message: 'Invalid email address' }, status: :bad_request
    end
  end
end
