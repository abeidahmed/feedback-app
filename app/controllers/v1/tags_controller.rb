class V1::TagsController < ApplicationController
  def create
    project = Project.find(params[:project_id])
    return error('unauthorized') unless project.team_members.include?(current_user)
    @tag = project.tags.build(tag_params)

    if @tag.save
      render :new, status: :created
    else
      render json: { message: @tag.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    project = Project.find(params[:project_id])
    return error('unauthorized') unless project.team_members.include?(current_user)
    tag = project.tags.find(params[:id])
    tag.destroy
  end

  private
  def tag_params
    params.require(:tag).permit(:name)
  end
end
