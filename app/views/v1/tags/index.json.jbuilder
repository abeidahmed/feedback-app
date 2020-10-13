color_hash = Color.new.pick_by_name('blue')
default_tag = [{
  id: 1,
  name: 'All',
  feedbacksCount: @project.feedbacks.count,
  textColor: color_hash[:contrast],
  bgColor: color_hash[:accent]
}].freeze

json.tags do
  json.array! default_tag

  json.array! @tags do |tag|
    json.partial! 'tag', tag: tag
  end
end