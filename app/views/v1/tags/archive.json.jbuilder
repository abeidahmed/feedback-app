json.tag do
  json.partial! 'tag', tag: @archive_tag
  json.feedbacks_count @project.feedbacks.archived.count
end