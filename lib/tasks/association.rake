namespace :association do
  desc 'Sets invite and project association'

  task :set_invite do
    Project.all.each do |project|
      Invitee.create! project: project
    end
  end
end