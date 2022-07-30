import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FormBasicSelect({ onAssistanceTypeSelected }) {

  return (
    <Box  sx={{ minWidth: 180, marginRight: 20, marginTop: 10}} >
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Tipo de Asistencia</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={ (event) => onAssistanceTypeSelected(event.target.value) }
        >
          <MenuItem value={'Bautismo'}>Bautismo</MenuItem>
          <MenuItem value={'Santa Cena'}>Santa Cena</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}