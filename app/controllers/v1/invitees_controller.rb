class V1::InviteesController < ApplicationController
  def create
    project = Project.find(params[:project_id])
    user = User.create_with(password: SecureRandom.urlsafe_base64).find_or_initialize_by(email: user_email)
    return render json: { message: user.errors }, status: :bad_request unless user.valid?
    return render json: { message: { email: ["#{user.email} is already on the team"] } }, status: :bad_request if project.team_members.include?(user)

    if user.new_record?
      user.save!
      user.set_password_reset_fields
      UserMailer.invite_user_to_team(user, project, new_record: true).deliver_now
    else
      UserMailer.invite_user_to_team(user, project).deliver_now
    end

    project.invitee.users << user
    head :created
  end

  def accept_invite
    project = Project.find(params[:project_id])
    invite_list = project.invitee.users
    return head :bad_request unless invite_list.exists?(current_user.id)

    invite_list.delete(current_user)
    project.team.add(current_user)
    head :ok
  end

  def decline_invite
    project = Project.find(params[:project_id])
    invite_list = project.invitee.users
    return head :bad_request unless invite_list.exists?(current_user.id)

    invite_list.delete(current_user)
    head :ok
  end

  private
  def user_email
    params.dig(:user, :email).downcase
  end
end
