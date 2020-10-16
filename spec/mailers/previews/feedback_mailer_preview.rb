# Preview all emails at http://localhost:3000/rails/mailers/feedback_mailer
class FeedbackMailerPreview < ActionMailer::Preview
  def feedback_mail(feedback: Feedback.first, to_address: 'hello')
    FeedbackMailer.feedback_mail(feedback: Feedback.first, to_address: 'hello')
  end
end
