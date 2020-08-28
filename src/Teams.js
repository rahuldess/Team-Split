import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: 150,
    float: 'left'
  }
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function getSubsets(array, sum) {
  function fork(i = 0, s = 0, t = []) {
    if (s === sum) {
      result.push(t);
      return;
    }

    if (i === array.length) {
      return;
    }

    if (s + array[i] <= sum) { // shout circuit for positive numbers only
      fork(i + 1, s + array[i], t.concat(array[i]));
    }

    fork(i + 1, s, t);
  }

  var result = [];
  fork();
  return result;
}

function comparer(otherArray){
  return function(current){
    return otherArray.filter(function(other){
      return other.name == current.name && other.weight == current.weight
    }).length == 0;
  }
}

const weightsArray = (selectedPlayers) => {
  return selectedPlayers.map(a => a.weight);
}

const team = (totalPlayers) => {
  var totalPlayers         = totalPlayers["totalPlayers"];
  const totalPlayersCount  = totalPlayers.length;
  const totalPlayersWeight = totalPlayers.reduce(function(total, player) { return total + player.weight; }, 0);
  const teamAPlayersCount  = Math.ceil(totalPlayersCount / 2);
  const teamBPlayersCount  = totalPlayers - teamAPlayersCount;

  // Using .floor here because team with 1 extra player should have
  // one less weak player comparitively.
  const teamAWeight  = Math.floor(totalPlayersWeight / 2);
  const teamBWeight  = totalPlayersWeight - teamAWeight;
  const weightsAList = getSubsets(weightsArray(totalPlayers), teamAWeight).filter(subset => subset.length === teamAPlayersCount)
  const randomSubset = weightsAList[Math.floor(Math.random() * weightsAList.length)];
  const clonedPlayers   = totalPlayers.slice();

  randomSubset.forEach(function(item, index) {
    const inx = clonedPlayers.findIndex(player => player.weight == item)

    if (inx > -1) {
      clonedPlayers.splice(inx, 1);
    }
  });

  const results = totalPlayers.filter(comparer(clonedPlayers));

  return { teamA: clonedPlayers, teamB: results }
}

export default function Teams(totalPlayers) {
  const classes   = useStyles();
  const finalTeam = team(totalPlayers);
  const teamA     = finalTeam.teamA;
  const teamB     = finalTeam.teamB;

  return (
    <TableContainer component={Paper} style={{ maxWidth: 300 }}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Team Red </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          {teamA.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row"> {row.name} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Team Blue </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          {teamB.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row"> {row.name} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
