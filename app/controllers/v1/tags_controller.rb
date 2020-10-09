class V1::TagsController < ApplicationController
  def create
    project = Project.find(params[:project_id])
    @tag = project.tags.build(tag_params)

    if @tag.save
      render :new, status: :created
    else
      render json: { message: @tag.errors.full_messages }, status: :bad_request
    end
  end

  private
  def tag_params
    params.require(:tag).permit(:name)
  end
end
