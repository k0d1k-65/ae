import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CreateIcon from "@mui/icons-material/Create";
import BackspaceIcon from "@mui/icons-material/Backspace";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import IosShareIcon from "@mui/icons-material/IosShare";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import { ListItemIcon, ListItemText, Button } from "@mui/material";
import useWindowSize from "../common/utils/WindowSize";

const ITEM_HEIGHT = 48;

const UnitStatActionMenu = (props: {
  handleOnClickSave?: () => void;
  handleOnClickClear?: () => void;
  handleOnDelete?: () => void;
  handleOnImport?: () => void;
  handleOnExport?: () => void;
  handleOnTrancate?: () => void;
}) => {
  const {
    handleOnClickSave = () => {},
    handleOnClickClear = () => {},
    handleOnDelete = () => {},
    handleOnImport = () => {},
    handleOnExport = () => {},
    handleOnTrancate = () => {},
  } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const [width] = useWindowSize();

  const options = [
    {
      key: "save",
      icon: <CreateIcon />,
      color: "success",
      handleOnClick: () => {
        handleOnClickSave();
        setAnchorEl(null);
      },
    },
    {
      key: "clear",
      icon: <BackspaceIcon />,
      color: "info",
      handleOnClick: () => {
        handleOnClickClear();
        setAnchorEl(null);
      },
    },
    {
      key: "delete",
      icon: <DeleteOutlineIcon />,
      color: "error",
      handleOnClick: () => {
        handleOnDelete();
        setAnchorEl(null);
      },
    },
    {
      key: "import",
      icon: <FileDownloadIcon />,
      color: "info",
      handleOnClick: () => {
        handleOnImport();
        setAnchorEl(null);
      },
    },
    {
      key: "export",
      icon: <IosShareIcon />,
      color: "info",
      handleOnClick: () => {
        handleOnExport();
        setAnchorEl(null);
      },
    },
    {
      key: "trancate",
      icon: <CleaningServicesIcon />,
      color: "error",
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

  type colors = "error" | "inherit" | "primary" | "secondary" | "info" | "success" | "warning";

  return (
    <div>
      {width > 1440 ? (
        options.map(({ key, icon, color, handleOnClick }) => (
          <Button variant="contained" color={color as colors} startIcon={icon} onClick={handleOnClick}>
            {key}
          </Button>
        ))
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default UnitStatActionMenu;
