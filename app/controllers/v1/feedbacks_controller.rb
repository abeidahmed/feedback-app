class V1::FeedbacksController < ApplicationController
  skip_before_action :authenticate_user!, only: [:create]

  def index
    project = Project.find(params[:project_id])
    @feedbacks = project.feedbacks.filterable(params[:filter])
  end

  def create
    project = Project.find(params[:project_id])
    tag = project.tags.find_by!(name: params[:tag])
    @feedback = tag.feedbacks.build(feedback_params)
    @feedback.project_id = project.id

    if @feedback.save
      render :new, status: :created
    else
      render json: { message: @feedback.errors.full_messages }, status: :bad_request
    end
  end

  def archive
    project = Project.find(params[:project_id])
    archive_tag = project.tags.find_by(name: 'Archive')
    feedback = project.feedbacks.find(params[:id])

    feedback.update(tag: archive_tag)
  end

  private
  def feedback_params
    params.require(:feedback).permit(
      :content,
      :sender_email,
      :page_url,
      :device
    )
  end
end
