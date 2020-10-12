json.projects @projects do |project|
  json.id project.id
  json.name project.name
  json.created_at project.created_at

  json.included do
    json.feedbacks do
      json.meta do
        json.feedbacks_count project.feedbacks.count
      end
    end

    json.members do
      json.meta do
        json.members_count project.team_members.count
      end
    end
  end
end