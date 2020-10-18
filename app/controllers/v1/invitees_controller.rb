class V1::InviteesController < ApplicationController
  def create
    project = Project.find(params[:project_id])
    user = User.create_with(password: SecureRandom.urlsafe_base64).find_or_initialize_by(email: user_email)

    if user.save
      if project.team_members.include?(user)
        render json: { message: "#{user.email} is already on the team" }, status: :bad_request
      else
        project.invitee.users << user
        head :created
      end
    else
      render json: { message: user.errors.full_messages }, status: :bad_request
    end
  end

  def accept_invite
    project = Project.find(params[:project_id])
    invite_list = project.invitee.users
    return head :bad_request unless invite_list.exists?(current_user.id)

    invite_list.delete(current_user)
    project.team.add(current_user)
    head :ok
  end

  private
  def user_email
    params.dig(:user, :email)
  end
end
