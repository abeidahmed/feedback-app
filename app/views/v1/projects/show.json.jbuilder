json.project do
  json.partial! 'project', project: @project

  json.included do
    json.team_members @project.team_members do |user|
      json.partial! 'v1/users/user', user: user
    end
  end
end