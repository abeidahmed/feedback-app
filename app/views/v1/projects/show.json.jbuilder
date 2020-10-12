default = [{ id: 1, name: 'All', feedbacksCount: @project.feedbacks.count }]

json.project do
  json.partial! 'project', project: @project

  json.included do
    json.tags do
      json.array! default
      json.array! @project.tags do |tag|
        json.partial! 'v1/tags/tag', tag: tag
      end
    end
  end
end