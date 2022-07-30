import React from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

import { saveMember } from '../../../api/members';

export default function Formulary() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    saveMember(data).then(() => {
      alert('Miembro guardado')
    });
  };

  return (
    <div className="contenedor-formulary">
      <div className="formulary-title">
        <h3>ALTA DE MIEMBRO</h3>
      </div>
      <div className="row-formulary">
        <form className="form-style">
          <label htmlFor="name" className="name">
            Nombre
          </label>
          <input
            id="firstName"
            className="input-name"
            {...register("firstName", { required: true, maxLength: 30 })}
          />
          {errors.firstName && errors.firstName.type === "required" && <span>*</span>}
          {errors.firstName && errors.firstName.type === "maxLength" && (
            <span>Max length exceeded</span>
          )}

          <label htmlFor="name" className="name">
            Apellido
          </label>
          <input
            id="lastName"
            className="input-name"
            {...register("lastName", { required: true, maxLength: 30 })}
          />
          {errors.lastName && errors.lastName.type === "required" && <span>*</span>}
          {errors.lastName && errors.lastName.type === "maxLength" && (
            <span>Max length exceeded</span>
          )}
          <label htmlFor="name" className="name">
            Fecha de bautismo
          </label>
          <input
            id="baptismDate"
            className="input-name"
            type="date"
            {...register("baptismDate", { required: true, maxLength: 30 })}
          />
          {errors.baptismDate && errors.baptismDate.type === "required" && <span>*</span>}
          {errors.baptismDate && errors.baptismDate.type === "maxLength" && (
            <span>Max length exceeded</span>
          )}
          <Stack direction="row" spacing={2}>
            <div className="form-button">
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleSubmit(onSubmit)}
              >
                Cargar
              </Button>
            </div>
          </Stack>
        </form>
      </div>
    </div>
  );
}
