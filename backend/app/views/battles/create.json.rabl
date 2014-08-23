object @battle
attributes :id
node(:challenger) do |battle| 
  { 
    id: battle.challenger.id,
    name: battle.challenger.name,
    email: battle.challenger.email,
    spells: @spells.map{|spell| {id: spell.id, name: spell.name, description: spell.description }}
  }
end
node(:challengee) do |battle| 
  { 
    id: battle.challengee.id,
    name: battle.challengee.name,
    email: battle.challengee.email,
    spells: []
  }
end