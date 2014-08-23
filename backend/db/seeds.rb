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
  damage_count: ''
  )

Spell.create!(
  name: "Reparo",
  description: "Used to repair broken or damaged objects",
  damage_count: ''
  )

Spell.create!(
  name: "Expecto Patronum",
  description: "Conjures an incarnation of the caster",
  damage_count: ''
  )

Spell.create!(
  name: "Expelliarmus",
  description: "disarms someone",
  damage_count: ''
  )

Spell.create!(
  name: "Diffindo",
  description: "Cuts or rips objects.",
  damage_count: ''
  )

Spell.create!(
  name: "Crucio",
  description: "Inflicts unbearable pain on the recipient",
  damage_count: ''
  )

Spell.create!(
  name: "Avada Kedavra",
  description: "Killing curse",
  damage_count: ''
  )

Spell.create!(
  name: "Stupefy",
  description: "stunning spell",
  damage_count: ''
  )

Spell.create!(
  name: "Tarantallegra",
  description: "makes a victim dance like spider",
  damage_count: ''
  )

Spell.create!(
  name: "Serpensortia",
  description: "Conjures a serpent from the spell caster’s wand.",
  damage_count: ''
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







