import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./formedit.css";
import FormBasicSelect from "./formselect";
import FormInputautocomplete from "./formautocomplete";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { saveAssistance } from "../../../api/assists";

export default function Formedit() {

  const [member, setMember] = useState(null);
  const [assistanceType, setAssistanceType] = useState("");
  const [date, setDate] = useState(null);

  function handleOnSave() {
    saveAssistance({
      member,
      assistanceType,
      date,
    }).then(() => {
      alert("Asistencia guardada");
    });
  }

  return (
    <div className="contenedor-formedit">
      <div className="formedit-title">
        <h3>Registro de Asistencia</h3>
      </div>
      <div className="row-formedit">
        <form className="form-style">
          <FormInputautocomplete
            onMemberSelected={(memberSelected) => setMember(memberSelected)}
          />
          <FormBasicSelect
            onAssistanceTypeSelected={(assistanceType) =>
              setAssistanceType(assistanceType)
            }
          />
          <Stack component="form" noValidate spacing={3}>
            <TextField
              id="date"
              label="Fecha"
              type="date"
              defaultValue="2017-05-24"
              onChange={(event) => setDate(event.target.value)}
              sx={{ width: 220, marginTop: 10, marginBottom: 10 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleOnSave}>
              Cargar
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}
