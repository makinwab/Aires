class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    oauth 'Facebook', 'devise.facebook_data'
  end

  def google_oauth2
    oauth 'Google', 'devise.google_data'
  end

  def oauth(kind, data)
    @user = User.from_omniauth(request.env['omniauth.auth'])

    if @user.persisted?
      sign_in_and_redirect @user, event: :authentication
      set_flash_message(:notice, :success, kind: kind) if is_navigational_format?
    else
      session[data.to_s] = request.env['omniauth.auth']
      redirect_to new_user_registration_url
    end
  end
end
