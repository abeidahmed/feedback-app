class FeedbackMailer < ApplicationMailer
end
class FeedbackMailer < ApplicationMailer
  def feedback_mail(from:, to_address:)
    @guest_mail = from
    @to_address = to_address
    mail to: to_address, subject: 'You have received a new feedback'
  end
end