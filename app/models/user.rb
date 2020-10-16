class User < ApplicationRecord
  before_create { email.downcase! }

  has_secure_password

  has_many :projects
  has_many :teamnations
  has_many :teams, through: :teamnations

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  validates_presence_of :email
  validates_uniqueness_of :email, case_sensitive: false
  validates_length_of :email, maximum: 255
  validates_format_of :email, with: VALID_EMAIL_REGEX

  validates_length_of :password, minimum: 5, allow_blank: true

  def self.find_by_credentials(email, password)
    user = self.find_by(email: email.downcase)
    return nil unless user
    user.authenticate(password) ? user : nil
  end

  def send_feedback_mail(feedback)
    FeedbackMailer.feedback_mail(feedback: feedback, to_address: self.email).deliver_now
  end

  def initialize_password_reset
    process_user
    send_password_reset_email
  end

  def process_user
    generate_token(:password_reset_token)
    self.password_reset_sent_at = Time.zone.now
    save!
  end

  def send_password_reset_email
    UserMailer.password_reset(self).deliver_now
  end

  def password_reset_token_expired?
    self.password_reset_sent_at < 2.hours.ago
  end

  private
  def generate_token(column)
    begin
      self[column] = SecureRandom.urlsafe_base64
    end while User.exists?(column => self[column])
  end
end
