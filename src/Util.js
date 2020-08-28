import React from 'react';

export const hasMinPlayersSelected = (state) => {
  return selectedPlayers(state).length >= 8;
}

export const selectedPlayers = (state) => {
  return state.checkboxes.filter(player => player.checked == true)
}

