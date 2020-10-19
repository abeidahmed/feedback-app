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
      set_password_reset_fields
      send_password_reset_email
    end

    def set_password_reset_fields
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

    def reset_password_reset_fields
      self.password_reset_token = nil
      self.password_reset_sent_at = nil
      save!
    end

    private
    def generate_token(column)
      begin
        self[column] = SecureRandom.urlsafe_base64
      end while User.exists?(column => self[column])
    end
  end
end