class AuthController < ApplicationController
  skip_before_action :login_required

  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { message: 'ログインしました。', name: user.name }, status: :ok # 200
    else
      render json: { errors: ['メールアドレスまたはパスワードが正しくありません。'] }, status: :unauthorized # 401
    end
  end

  def destroy
    reset_session
    payload = { message: 'ログアウトしました。' }
    render json: payload
  end
end