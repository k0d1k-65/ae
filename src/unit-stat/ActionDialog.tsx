import * as React from "react";
import { Button, Dialog, DialogContent, DialogActions } from "@mui/material";

// TODO: カスタムとか
type colors = "error" | "inherit" | "primary" | "secondary" | "info" | "success" | "warning";

const UnitStatActionDialog = (props: { title: string; icon: JSX.Element; color: string; delegate: () => void }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleOk = () => {
    setOpen(false);
    props.delegate();
  };

  return (
    <>
      <Button variant="contained" color={props.color as colors} startIcon={props.icon} onClick={handleOpen}>
        {props.title}
      </Button>

      <Dialog open={open} onClick={handleCancel}>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCancel}>
            CANCEL
          </Button>
          <Button onClick={handleOk}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UnitStatActionDialog;
