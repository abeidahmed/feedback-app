class V1::PasswordResetsController < ApplicationController
  skip_before_action :authenticate_user!

  def create
    user = User.find_by_email(email_param)

    if user
      user.initialize_password_reset
    else
      render json: { message: 'Invalid email address' }, status: :bad_request
    end
  end

  def show
    user = User.find_by_password_reset_token(params[:id])

    if !user || user.password_reset_token_expired?
      head :not_found
    else
      head :ok
    end
  end

  def update
    user = User.find_by_password_reset_token(params[:id])
    return user_not_found_message unless user
    return token_expired_message if user.password_reset_token_expired?

    if password_param.blank?
      user.errors.add(:password, 'cannot be blank')
      render json: { message: user.errors.full_messages }, status: :bad_request
    elsif user.update(password: password_param)
      user.reset_password_reset_fields
    else
      render json: { message: 'Something went wrong' }, status: :unprocessable_entity
    end
  end

  private
  def email_param
    params.dig(:user, :email).downcase
  end

  def password_param
    params.dig(:user, :password)
  end

  def user_not_found_message
    render json: { message: 'User does not exist' }, status: :bad_request
  end

  def token_expired_message
    render json: { message: 'Password reset token has expired' }, status: :bad_request
  end
end
