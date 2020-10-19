json.id project.id
json.name project.name
json.created_at project.created_at
json.pending_invite !project.team_members.include?(current_user)