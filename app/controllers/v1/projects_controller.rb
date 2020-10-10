class V1::ProjectsController < ApplicationController
  def create
    @project = current_user.projects.build(project_params)
    team = Team.create!
    @project.team_id = team.id
    team.users << current_user

    if @project.save
      render :new, status: :created
    else
      render json: { message: @project.errors.full_messages }, status: :bad_request
    end
  end

  def update
    @project = Project.find(params[:id])
    return error('unauthorized') unless current_user?(@project.user)

    if @project.update(project_params)
      render :new
    else
      render json: { message: @project.errors.full_messages }, status: :bad_request
    end
  end

  private
  def project_params
    params.require(:project).permit(:name)
  end
end
