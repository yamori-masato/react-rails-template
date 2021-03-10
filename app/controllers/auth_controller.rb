class AuthController < ApplicationController
  skip_before_action :login_required

  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      payload = { message: 'ログインしました。', name: user.name }
    else
      payload = { errors: ['メールアドレスまたはパスワードが正しくありません。'] }
    end
    render json: payload
  end

  def destroy
    reset_session
    payload = { message: 'ログアウトしました。', name: user.name }
    render json: payload
  end
end