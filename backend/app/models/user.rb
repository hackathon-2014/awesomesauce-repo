class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :favorite_list
  has_many :spells
  has_many :spells, through: :weapons

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable
  TEMP_EMAIL_PREFIX = 'change@me'
  def self.create_with_omniauth(auth)
    new_email = auth.try(:[], 'info').try(:[], 'email')
    new_user = self.new(
      provider: auth["provider"],
      uid: auth["uid"],
      name: auth["info"]["name"],
      email: new_email ? new_email : "#{TEMP_EMAIL_PREFIX}-#{auth['uid']}-#{auth['provider']}.com",
      password: Devise.friendly_token[0,20]
    )
    new_user.save!
    new_user
  end
end

