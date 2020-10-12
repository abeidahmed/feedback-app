json.project do
  json.partial! 'project', project: @project

  json.included do
    json.tags @project.tags do |tag|
      json.partial! 'v1/tags/tag', tag: tag
    end
  end
end