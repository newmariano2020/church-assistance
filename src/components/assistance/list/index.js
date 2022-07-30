import React, { useEffect, useState } from "react";
import './index.css';
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import { searchAssists } from "../../../api/assists";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';





function AssistanceList() {

  const [rows, setRows] = useState([]);
  const [date, setDate] = useState(null);
  const [assistanceType, setAssistanceType] = useState(null);

  async function searchListAssist() {
    const assistsRows = [];
    const members = await searchAssists(assistanceType, date);
    for (const assistance of members) {
      assistsRows.push({
        id: assistance.id,
        assistanceType: assistance.assistanceType,
        date: assistance.date,
        member: assistance.member.firstName + ' ' + assistance.member.lastName 
      });
    }
    setRows(assistsRows);
  }

  useEffect(() => {
    searchListAssist();
  }, []);

  const columns = [
    { field: "assistanceType", headerName: "Tipo de asistencia", width: 150 },
    { field: "date", headerName: "Fecha", width: 150 },
    { field: "member", headerName: "Miembro", width: 450 },
  ];

  return (
    <div>
      <div className='assistance-container'>
        <div className='assistance-row'>
          <div className='assistance-title'>
            <h3>LISTADO DE ASISTENCIA</h3>
          </div>
        </div>

        <div className='assistance-row_filter'>
          <div className='select-style'>

            <Box sx={{ minWidth: 180, marginRight: 20 }} >
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Tipo de Asistencia</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={(event) => setAssistanceType(event.target.value)}
                >
                  <MenuItem value="Bautismo">Bautismo</MenuItem>
                  <MenuItem value="Santa cena">Santa Cena</MenuItem>
                </Select>

              </FormControl>

            </Box>

            <Stack component="form" noValidate spacing={3}>
              <TextField
                id="date"
                label="Fecha"
                type="date"
                onChange={(event) => setDate(event.target.value)}
                defaultValue={ new Date().toISOString().slice(0, 10) }
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
            <Stack direction="row" marginLeft={4} spacing={2} height={54}>
                <Button variant="contained" onClick={() => searchListAssist()}>Buscar</Button>
              </Stack>
          </div>
        </div>
        <div className="print-row">
        <div className="print-button">
          <Button variant="contained" style={{ width: 260, marginRight: 50  }}>Registro de Miembros</Button>
          </div>
          <div className="print-button">
          <Button variant="contained" style={{ width: 260 }}>Registro de Asistencia</Button>
          </div>
        </div>
        <div className='assistance-row_table'>
          <DataGrid rows={rows} columns={columns} autoHeight />
        </div>
        <div className="print-row">
        <div className="print-button">
          <Button variant="contained" style={{ width: 120 }}>Imprimir <PictureAsPdfIcon style={{ marginLeft: 10 }}/> </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssistanceList;