class UserMailer < ApplicationMailer
  def password_reset(user)
    @user = user

    mail to: user.email, subject: 'Reset your password'
  end

  def invite_user_to_team(user, project, **options)
    @user = user
    @project = project
    @options = options

    mail to: user.email, subject: "You have been invited to be a part of #{project.name} project"
  end
end
