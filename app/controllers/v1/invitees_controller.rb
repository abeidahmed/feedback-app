class V1::InviteesController < ApplicationController
  def create
    project = Project.find(params[:project_id])
    user = User.find_by_email(user_email)

    if user
      if project.team_members.include?(user)
        render json: { message: "#{user.email} is already on the team" }, status: :bad_request
      else
        project.invitee.users << user
        head :created
      end
    else
      new_user = User.new email: user_email, password: 'helloworld'
      if new_user.save
        project.invitee.users << new_user
        head :created
      else
        render json: { message: new_user.errors.full_messages }, status: :bad_request
      end
    end
  end

  private
  def user_email
    params.dig(:user, :email)
  end
end
