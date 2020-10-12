color_hash = Color.new.pick_by_name('blue')
default_tag = [{
  id: 1,
  name: 'All',
  feedbacksCount: @project.feedbacks.count,
  textColor: color_hash[:contrast],
  bgColor: color_hash[:accent]
}].freeze

json.project do
  json.partial! 'project', project: @project

  json.included do
    json.tags do
      json.array! default_tag
      json.array! @project.tags do |tag|
        json.partial! 'v1/tags/tag', tag: tag
      end
    end
  end
end