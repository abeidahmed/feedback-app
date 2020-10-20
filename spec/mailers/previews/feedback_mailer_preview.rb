# Preview all emails at http://localhost:3000/rails/mailers/feedback_mailer
class FeedbackMailerPreview < ActionMailer::Preview
  def feedback_mail
    feedback = Feedback.last
    user = User.first
    FeedbackMailer.feedback_mail(feedback: feedback, to_address: user.email)
  end
end
