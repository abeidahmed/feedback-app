module UsersHelper
  def last_email
    ActionMailer::Base.deliveries.last
  end
end