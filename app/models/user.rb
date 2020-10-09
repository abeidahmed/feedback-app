class User < ApplicationRecord
  before_create { email.downcase!}

  has_secure_password

  has_many :projects

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
end
