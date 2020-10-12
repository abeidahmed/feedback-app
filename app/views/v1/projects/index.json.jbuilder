json.projects @projects do |project|
  json.partial! 'project', project: project

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