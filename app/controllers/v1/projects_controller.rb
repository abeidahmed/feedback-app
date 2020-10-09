class V1::ProjectsController < ApplicationController
  def create
    @project = current_user.projects.build(project_params)

    if @project.save
      render :new, status: :created
    else
      render json: { message: @project.errors.full_messages }, status: :bad_request
    end
  end

  private
  def project_params
    params.require(:project).permit(:name)
  end
end
