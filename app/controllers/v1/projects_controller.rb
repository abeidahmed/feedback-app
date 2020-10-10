class V1::ProjectsController < ApplicationController
  def create
    @project = current_user.projects.build(project_params)
    team = Team.create!
    @project.team_id = team.id
    team.add(current_user)

    if @project.save
      render :new, status: :created
    else
      render json: { message: @project.errors.full_messages }, status: :bad_request
    end
  end

  def update
    @project = Project.find(params[:id])
    return error('unauthorized') unless @project.team_members.include?(current_user)

    if @project.update(project_params)
      render :new
    else
      render json: { message: @project.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    project = Project.find(params[:id])
    return error('unauthorized') unless project.team_members.include?(current_user)
    project.destroy
  end

  private
  def project_params
    params.require(:project).permit(:name)
  end
end
