import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getMembersFromApi } from "../../../api/members";

export default function FormInputautocomplete({onMemberSelected}) {
  const [searchTerm, setSearchTerm] = React.useState(null);
  const [members, setMembers] = React.useState([]);
  const [selectedMember, setSelectedMember] = React.useState(null);


  React.useEffect(() => {
    if (searchTerm?.length > 3) {
      getMembersFromApi(searchTerm).then((members) => {
        setMembers(members);
      });
    }
  }, [searchTerm]);
  return (
    <Autocomplete
      disablePortal
      onInputChange={(event, newSearchTerm) => {
        setSearchTerm(newSearchTerm);
      }}
      id="combo-box-demo"
      onChange={(_, member) => {
        if (member) {
          onMemberSelected(member);
        }
        setSelectedMember(member)
      }}
      getOptionLabel={(option) =>
        typeof option === "string"
          ? option
          : option.firstName + " " + option.lastName
      }
      options={members}
      value={searchTerm}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Nombre de Miembro" />
      )}
    />
  );
}
