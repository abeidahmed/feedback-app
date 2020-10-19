json.project do
  json.partial! 'project', project: @project

  json.included do
    json.team_members do
      json.array! @project.team_members do |user|
        json.partial! 'v1/users/user', user: user
        json.invited false
      end

      json.array! @project.invitee.users do |user|
        json.partial! 'v1/users/user', user: user
        json.invited true
      end
    end
  end
end