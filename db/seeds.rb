# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Feedback.destroy_all
Tag.destroy_all
Project.destroy_all
Team.destroy_all
Invitee.destroy_all
User.destroy_all

6.times do
  user = User.create! email: Faker::Internet.unique.email, password: 'mamakane'

  team = Team.new
  team.users << user

  project = Project.create! name: Faker::App.unique.name, user: user, team: team

  6.times do
    tag_ref = rand(0..2)
    feedback = Feedback.create!(
      content: Faker::Lorem.paragraph,
      sender_email: Faker::Internet.email,
      page_url: '/about',
      device: 'MacOS 64',
      project: project,
      archived: false,
      tag: project.tags.where.not(name: 'Archive')[tag_ref]
    )
  end
end