object @battle
attributes :id
node(:challenger) do |battle| 
  { 
    id: battle.challenger.id,
    challenger_hp: battle.challenger_hp,
    name: battle.challenger.name,
    email: battle.challenger.email
  }
end
node(:challengee) do |battle| 
  { 
    id: battle.challengee.id,
    challengee_hp: battle.challengee_hp,
    name: battle.challengee.name,
    email: battle.challengee.email
  }
end