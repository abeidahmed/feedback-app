class User < ApplicationRecord
  include Authentication

  before_create { email.downcase! }

  has_many :projects
  has_many :teamnations
  has_many :teams, through: :teamnations
  has_many :invitables
  has_many :invitees, through: :invitables

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  validates_presence_of :email
  validates_uniqueness_of :email, case_sensitive: false
  validates_length_of :email, maximum: 255
  validates_format_of :email, with: VALID_EMAIL_REGEX

  validates_length_of :password, minimum: 5, allow_blank: true

  def send_feedback_mail(feedback)
    FeedbackMailer.feedback_mail(feedback: feedback, to_address: self.email).deliver_now
  end
end
