# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/user_mailer/password_reset
  def password_reset
    user = User.last
    UserMailer.password_reset(user)
  end

  def invite_user_to_team
    user = User.last
    project = Project.last
    UserMailer.invite_user_to_team(user, project, new_record: true)
  end
end
