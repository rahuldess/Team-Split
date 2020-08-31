import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

import Checkbox from './Checkbox'
import Teams from './Teams'
import * as Util from './Util'

const PLAYERS = [
  { name: 'Aaditya', weight: 4, checked: false },
  { name: 'Aakash', weight: 2, checked: false },
  { name: 'Akshay', weight: 5, checked: false },
  { name: 'Amog', weight: 1, checked: false },
  { name: 'Anas', weight: 4, checked: false },
  { name: 'Atif', weight: 3, checked: false },
  { name: 'Avi', weight: 3, checked: false },
  { name: 'Bharath', weight: 4, checked: false }, 
  { name: 'Deep', weight: 4, checked: false }, 
  { name: 'Gourav', weight: 5, checked: false },
  { name: 'Hardik', weight: 1, checked: false },
  { name: 'Maddy',  weight: 4, checked: false },
  { name: 'Mohit',  weight: 4, checked: false },
  { name: 'Nilesh', weight: 4, checked: false },
  { name: 'Prabhanshu', weight: 3, checked: false },
  { name: 'Piyush', weight: 1, checked: false },
  { name: 'Rahul' ,  weight: 2, checked: false }, 
  { name: 'Rohan', weight: 3, checked: false },
  { name: 'Rohith', weight: 5, checked: false },
  { name: 'Sheily', weight: 2, checked: false },
  { name: 'Shriram', weight: 2, checked: false },
  { name: 'Shreyas', weight: 3, checked: false },
  { name: 'Shub', weight: 4, checked: false },
  { name: 'Taku', weight: 1, checked: false },
  { name: 'Theo', weight: 4, checked: false },
  { name: 'Vivi', weight: 3, checked: false },
  { name: 'Zaid', weight: 4, checked: false }
]

class App extends Component {
  state = {
    checkboxes: PLAYERS 
  }

  createCheckboxes = () => PLAYERS.map(player => this.createCheckbox(player));
  selectAll        = () => this.selectAllCheckboxes(true);
  deSelectAll      = () => this.selectAllCheckboxes(false);

  selectAllCheckboxes = isSelected => {
    this.setState(function(prevState) {
      return {
        checkboxes: prevState.checkboxes.map(player => (
            Object.assign(player, { checked: isSelected }) 
          )
        )
      }
    })
  };

  handleCheckboxChange = changeEvent => {
    const playerName   = changeEvent.target.name;

    this.setState(function(prevState) {
      return {
        checkboxes: prevState.checkboxes.map(player => (
          player.name === playerName ? 
            Object.assign(player, { checked: !player.checked }) 
            :
            player
          )
        )
      }
    })
  };

  createCheckbox = player => {
    const playersIndex = this.state.checkboxes.findIndex(pilayer => pilayer.name === player.name);

    return(
      <Checkbox
        label={player.name}
        isSelected={this.state.checkboxes[playersIndex].checked}
        onCheckboxChange={this.handleCheckboxChange}
        key={player.name}
      />
    )
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6"> 
              Burnaby FC <SportsSoccerIcon/>
            </Typography>
          </Toolbar>
        </AppBar>

        <Box display="flex" justifyContent="center" alignItems="center" mb={2} mt={2}>
          { Util.hasMinPlayersSelected(this.state) ? <Teams totalPlayers={Util.selectedPlayers(this.state)} /> : null }
        </Box>

        <Divider light/>
        <Typography component="div" align="center">
          <Box fontSize="h3.fontSize" fontFamily="Monospace" fontWeight="fontWeightBold" m={1}>
            Players
          </Box>
        </Typography>
        <Divider light/>

        <Box display="flex" justifyContent="center" borderRight={1} borderLeft={1} mt={4} mb={5} style={{ maxHeight: 280, overflow: 'auto' }}>
          <div>
            {this.createCheckboxes()}
          </div>
        </Box>

        <div align="center">
          <Button variant="contained" size="small" color="primary" onClick={this.selectAll}> Select All </Button>&nbsp;&nbsp;
          <Button variant="contained" size="small" color="secondary" onClick={this.deSelectAll}> Deselect All </Button>
        </div>
      </div>
    );
  }
}

export default App;
