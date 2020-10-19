class V1::UsersController < ApplicationController
  skip_before_action :authenticate_user!, only: [:create]

  def create
    @user = User.new(user_params)

    if @user.save
      @token = Token.new(user_id: @user.id).encode
      render :new, status: :created
    else
      render json: { message: @user.errors }, status: :bad_request
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
