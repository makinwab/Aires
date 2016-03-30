class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :omniauthable

  validates :fullname, presence: true, length: { maximum: 50 }

  def self.from_omniauth(auth)
    user = User.where(email: auth.info.email).first

    return user if user

    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.fullname = auth.info.name
      user.email = auth.info.email
      user.provider = auth.provider
      user.uid = auth.uid
      user.image = auth.info.image
      user.password = Devise.friendly_token[0,20]
    end
  end
end
