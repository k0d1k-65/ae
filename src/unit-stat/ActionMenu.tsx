import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import IosShareIcon from "@mui/icons-material/IosShare";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import { ListItemIcon, ListItemText } from "@mui/material";

const ITEM_HEIGHT = 48;

const UnitStatActionMenu = (props: {
  handleOnDelete?: () => void;
  handleOnImport?: () => void;
  handleOnExport?: () => void;
  handleOnTrancate?: () => void;
}) => {
  const {
    handleOnDelete = () => {},
    handleOnImport = () => {},
    handleOnExport = () => {},
    handleOnTrancate = () => {},
  } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const options = [
    {
      key: "delete",
      icon: <DeleteOutlineIcon />,
      handleOnClick: () => {
        handleOnDelete();
        setAnchorEl(null);
      },
    },
    {
      key: "import",
      icon: <FileDownloadIcon />,
      handleOnClick: () => {
        handleOnImport();
        setAnchorEl(null);
      },
    },
    {
      key: "export",
      icon: <IosShareIcon />,
      handleOnClick: () => {
        handleOnExport();
        setAnchorEl(null);
      },
    },
    {
      key: "trancate",
      icon: <CleaningServicesIcon />,
      handleOnClick: () => {
        handleOnTrancate();
        setAnchorEl(null);
      },
    },
  ];

  // メニュークリック時
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map(({ key, icon, handleOnClick }) => (
          <MenuItem key={key} onClick={handleOnClick}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={key} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default UnitStatActionMenu;
