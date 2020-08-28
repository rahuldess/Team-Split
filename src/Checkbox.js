import React from "react";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';

const PlayerBox = ({ label, isSelected, onCheckboxChange }) => (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox 
            checked={isSelected}
            onChange={onCheckboxChange}
            color="primary"
            name={label}/>
        }
        label={label}
      />
    </FormGroup>
);

export default PlayerBox;
