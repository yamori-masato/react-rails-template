class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :check_xhr_header
  before_action :current_user
  before_action :login_required

  private
    def current_user
      @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
    end

    def login_required
      return if @current_user
      render json: { error: 'unauthorized' }, status: :unauthorized # 401
    end

    def check_xhr_header
      return if request.xhr?
      render json: { error: 'forbidden' }, status: :forbidden # 403
    end
end
