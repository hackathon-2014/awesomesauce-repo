# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Spell.create!(
  name: 'Silencio',
  description: 'Silences something immediately',
  damage_count: 5
  )

Spell.create!(
  name: "Reparo",
  description: "Used to repair broken or damaged objects",
  damage_count: 10
  )

Spell.create!(
  name: "Expecto Patronum",
  description: "Conjures an incarnation of the caster",
  damage_count: 2
  )

Spell.create!(
  name: "Expelliarmus",
  description: "disarms someone",
  damage_count: 15
  )

Spell.create!(
  name: "Diffindo",
  description: "Cuts or rips objects.",
  damage_count: 2
  )

Spell.create!(
  name: "Crucio",
  description: "Inflicts unbearable pain on the recipient",
  damage_count: 14
  )

Spell.create!(
  name: "Avada Kedavra",
  description: "Killing curse",
  damage_count: 20
  )

Spell.create!(
  name: "Stupefy",
  description: "stunning spell",
  damage_count: 12
  )

Spell.create!(
  name: "Tarantallegra",
  description: "makes a victim dance like spider",
  damage_count: 6
  )

Spell.create!(
  name: "Serpensortia",
  description: "Conjures a serpent from the spell caster’s wand.",
  damage_count: 3
  )

User.create!(
  name: "Nick",
  email: "Nick@nick.com",
  password: "password",
  password_confirmation: "password"
  )

User.create!(
  name: "Jake",
  email: "jake@jake.com",
  password: "password",
  password_confirmation: "password"
  )

User.create!(
  name: "Kevin",
  email: "Kevin@kevin.com",
  password: "password",
  password_confirmation: "password"
  ) 







