class V1::ProjectsController < ApplicationController
  def create
    @project = current_user.projects.build(project_params)

    ActiveRecord::Base.transaction do
      team = Team.create!
      @project.team_id = team.id
      team.add(current_user)
      raise ActiveRecord::Rollback unless @project.valid?
    end

    if @project.save
      render :new, status: :created
    else
      render json: { message: @project.errors.full_messages }, status: :bad_request
    end
  end

  def update
    @project = Project.find(params[:id])
    return error('unauthorized') unless team_has_access?(@project.team_members)

    if @project.update(project_params)
      render :new
    else
      render json: { message: @project.errors.full_messages }, status: :bad_request
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
