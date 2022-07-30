import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./formlist.css";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { getMembersFromApi } from "../../../api/members";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function Formlist() {
  const {
    
    handleSubmit,
    
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [rows, setRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);

  const columns = [
    { field: "id", headerName: "Id", width: 150 },
    { field: "firstName", headerName: "Nombre", width: 150 },
    { field: "lastName", headerName: "Apellido", width: 150 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 400,
      renderCell: (row) => (
        <div>
          <Button variant="contained" style={{ width: 80 }}><EditIcon /></Button>
          <Button variant="contained" style={{ marginLeft: 20, width: 80 }}>
            <DeleteForeverIcon />
          </Button>
        </div>
      ),
    },
  ];

  async function searchMembers() {
    const membersRows = [];
    const members = await getMembersFromApi(searchTerm);
    for (const member of members) {
      membersRows.push({
        id: member.id,
        firstName: member.firstName,
        lastName: member.lastName,
      });
    }
    setRows(membersRows);
  }

  useEffect(() => {
    searchMembers();
  }, );

  return (
    <div className="contenedor-formlist">
      <div className="formlist-title">
        <h3>LISTADO DE MIEMBRO</h3>
      </div>
      <div className="row-formlist">
        <form onSubmit={handleSubmit(onSubmit)} className="formlist-style">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "60ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Miembro"
              variant="outlined"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </Box>
          
          <Stack direction="row" spacing={2} height={54} paddingTop={1}>
            <Button variant="contained" onClick={() => searchMembers()}>
              Buscar
            </Button>
          </Stack>

        </form>
        <div className="print-row">
        <div className="print-button">
          <Button variant="contained" style={{ width: 260, marginRight: 50  }}>Registro de Miembros<PictureAsPdfIcon style={{ marginLeft: 10 }}/></Button>
          </div>
          <div className="print-button">
          <Button variant="contained" style={{ width: 260 }}>Registro de Asistencia<PictureAsPdfIcon style={{ marginLeft: 10 }}/></Button>
          </div>
        </div>
        <DataGrid rows={rows} columns={columns} autoHeight />
      </div>
      <div className="print-row">
        <div className="print-button">
          <Button variant="contained" style={{ width: 120 }}>Imprimir <PictureAsPdfIcon style={{ marginLeft: 10 }}/></Button>
          </div>
        </div>
      </div>
      );
}
