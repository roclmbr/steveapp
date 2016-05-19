class UsersController < ApplicationController
  respond_to :json
  def index
    respond_to do |format|
        format.json { render json: User.all }
      format.html
    end
  end

  def create
      respond_with User.create(user_params)
  end

  def destroy
      respond_with User.destroy(params[:id])
  end
    
    def rock
    end

private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :reason)
  end
end
