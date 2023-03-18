import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import EditDetails from "components/EditDetails/EditDetails";

export default function AlertDialog({ isOpen, onClick, id, data }) {
  return (
    <Dialog open={isOpen} onClose={onClick}>
      <DialogContent sx={{ padding: 0, bgcolor: "#282828" }}>
        <EditDetails id={id} onClose={onClick} data={data} />
      </DialogContent>
      {/* <DialogActions></DialogActions> */}
    </Dialog>
  );
}
