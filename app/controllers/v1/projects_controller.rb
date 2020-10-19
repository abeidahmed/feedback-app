class V1::ProjectsController < ApplicationController
  def index
    @projects = Project.user_part_of(current_user).includes(:feedbacks, :team)
  end

  def create
    @project = current_user.projects.build(project_params)
    @project.initialize_team(current_user)

    if @project.save
      render :new, status: :created
    else
      render json: { message: @project.errors }, status: :bad_request
    end
  end

  def show
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
    return error('unauthorized') unless team_has_access?(@project.team_members)

    if @project.update(project_params)
      render :new
    else
      render json: { message: @project.errors }, status: :bad_request
    end
  end

  def destroy
    project = Project.find(params[:id])
    return error('unauthorized') unless team_has_access?(project.team_members)

    project.destroy
  end

  private
  def project_params
    params.require(:project).permit(:name)
  end
end
