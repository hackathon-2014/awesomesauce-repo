object @battle
attributes :id
node(:challenger) do |battle| 
  { 
    id: battle.challenger.id,
    challenger_hp: battle.challenger_hp,
    name: battle.challenger.name,
    email: battle.challenger.email,
    spells: @challenger_spells.map{|spell| {id: spell.id, name: spell.name, description: spell.description }}
  }
end
node(:challengee) do |battle| 
  { 
    id: battle.challengee.id,
    challengee_hp: battle.challengee_hp,
    name: battle.challengee.name,
    email: battle.challengee.email,
    spells: @challengee_spells.map{|spell| {id: spell.id, name: spell.name, description: spell.description }}
  }
end