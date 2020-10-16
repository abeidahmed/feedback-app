class FeedbackMailer < ApplicationMailer
end
class FeedbackMailer < ApplicationMailer
  def feedback_mail(feedback:, to_address:)
    @feedback = feedback
    @to_address = to_address
    mail to: to_address, subject: 'You have received a new feedback'
  end
end