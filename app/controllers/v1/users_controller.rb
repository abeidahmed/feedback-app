class V1::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      @token = Token.new(user_id: @user.id).encode
      render :new, status: :created
    else
      render json: { message: @user.errors.full_messages }, status: :bad_request
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
