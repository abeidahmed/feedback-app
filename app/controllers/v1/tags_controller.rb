class V1::TagsController < ApplicationController
  def create
    project = find_project
    return error('unauthorized') unless project.team_members.include?(current_user)
    return error('bad_request') if params.dig(:tag, :name).downcase == 'archive'
    @tag = project.tags.build(tag_params)

    if @tag.save
      render :new, status: :created
    else
      render json: { message: @tag.errors.full_messages }, status: :bad_request
    end
  end

  def update
    project = find_project
    return error('unauthorized') unless project.team_members.include?(current_user)
    @tag = project.tags.find(params[:id])
    return error('bad_request') if @tag.name.downcase == 'archive'

    if @tag.update(tag_params)
      render :new
    else
      render json: { message: @tag.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    project = find_project
    return error('unauthorized') unless project.team_members.include?(current_user)
    tag = project.tags.find(params[:id])
    return error('bad_request') if tag.name.downcase == 'archive'
    tag.destroy
  end

  private
  def tag_params
    params.require(:tag).permit(:name)
  end

  def find_project
    Project.find(params[:project_id])
  end
end
