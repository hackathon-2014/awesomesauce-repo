object @battle
attributes :id
node(:challenger){ |battle| battle.challenger }
node(:challengee){ |battle| battle.challengee }