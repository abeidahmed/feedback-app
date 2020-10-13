class V1::TagsController < ApplicationController
  def index
    @project = Project.find(params[:project_id])
    @tags = @project.tags
  end

  def create
    project = find_project(params[:project_id])
    return error('unauthorized') unless team_has_access?(project.team_members)

    @tag = project.tags.build(tag_params)
    @tag.set_color(color_id) if color_id.present?

    if @tag.save
      render :new, status: :created
    else
      render json: { message: @tag.errors.full_messages }, status: :bad_request
    end
  end

  def update
    project = find_project(params[:project_id])
    return error('unauthorized') unless team_has_access?(project.team_members)

    @tag = project.tags.find(params[:id])
    return error('bad_request') if @tag.is_archive_tag?

    @tag.set_color(color_id) if color_id.present?

    if @tag.update(tag_params)
      render :new
    else
      render json: { message: @tag.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    project = find_project(params[:project_id])
    return error('unauthorized') unless team_has_access?(project.team_members)

    tag = project.tags.find(params[:id])
    return error('bad_request') if tag.is_archive_tag?

    tag.destroy
  end

  private
  def tag_params
    params.require(:tag).permit(:name)
  end

  def color_id
    params.dig(:tag, :color_id)
  end

  def find_project(id)
    Project.find(id)
  end
end
