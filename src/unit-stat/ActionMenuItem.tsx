import * as React from "react";
import { Button, Dialog, DialogContent, DialogActions, MenuItem, ListItemIcon, ListItemText } from "@mui/material";

const UnitStatActionMenuItem = (props: { title: string; icon: JSX.Element; delegate: () => void }) => {
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
      <MenuItem key={props.title} onClick={handleOpen}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.title} />
      </MenuItem>

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

export default UnitStatActionMenuItem;
