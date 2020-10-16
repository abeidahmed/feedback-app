class User
  module Authentication
    extend ActiveSupport::Concern

    included do
      has_secure_password
    end

    module ClassMethods
      def find_by_credentials(email, password)
        user = self.find_by(email: email.downcase)
        return nil unless user
        user.authenticate(password) ? user : nil
      end
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
end