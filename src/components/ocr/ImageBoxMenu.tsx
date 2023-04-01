import React from 'react';
import { IconButton, TextField, Menu, MenuItem, MenuList } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {saveDataToLocalStorage, removeDataFromLocalStorage, getDataFromLocalStorage} from '../../services/StorageService';
import {RectangleType} from './types';

// 座標を保存するローカルストレージのキー
const rectanglesStorageKey = 'rectanglesStorageKey';

export default function ImageBoxMenu(props: {
  rectangles: RectangleType[],
  setRectangles: (x: RectangleType[]) => void,
  handleClose: () => void,
}) {
  const {rectangles, setRectangles, handleClose} = props;

  // メニュー anchor 1層
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // メニュー開閉
  const isOpenMenu = Boolean(anchorEl);

  // メニュー anchor 2層
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

  // メニュー開閉 2層
  const isOpenMenu2 = Boolean(anchorEl2);

  // メニュー preset保存名
  const [menuName, setMenuName] = React.useState<string>("");

  // ローカルストレージの座標データ
  const [rectanglesStorage, setRectanglesStorage] = React.useState<Object[]>([]);

  // メニューを開く
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // メニューを閉じる
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // プリセットメニューOPEN
  const handleMenuPresetOpen = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };

  // プリセットメニューCLOSE
  const handleMenuPresetClose = () => {
    setAnchorEl2(null);
  };

  // 保存
  const handleMenuSave = () => {
    setAnchorEl(null);

    // 保存キー名
    const key = menuName;
    setMenuName("");

    // ローカルストレージの座標データ
    const oldData = getDataFromLocalStorage(rectanglesStorageKey);
    console.log('【DEBUG】', JSON.stringify(oldData, null, 2));

    // キー名入力と、座標クリックがあるときだけ保存
    if (key && rectangles.length) {
      const saveData = {
        ...oldData,
        [key]: rectangles
      };
      console.log('【DEBUG】', JSON.stringify(saveData, null, 2));

      // ストレージに保存
      saveDataToLocalStorage(rectanglesStorageKey, saveData);
    }
  };

  // 座標クリア
  const handleMenuClear = () => {
    setAnchorEl(null);
    setRectangles([]);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMenuOpen}
        style={{
          margin: 'auto',
          marginTop: 0,
        }}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpenMenu}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        {/* 座標データのプリセットを適用 */}
        <MenuItem onClick={handleMenuPresetOpen}>プリセット</MenuItem>

        {/* 座標データをプリセット保存 */}
        <MenuItem onClick={handleMenuSave}>保存</MenuItem>
        <TextField
          type="text"
          label='保存タイトル'
          value={menuName}
          onChange={e => setMenuName(e.target.value)}
          size={'small'}
        />

        {/* 画像上のクリック座標をクリア */}
        <MenuItem onClick={handleMenuClear}>クリア</MenuItem>

        {/* OCR対象画像row削除 */}
        <MenuItem onClick={handleClose}>削除</MenuItem>
      </Menu>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl2}
        open={isOpenMenu2}
        onClose={handleMenuPresetClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <MenuList>
          {
            rectanglesStorage.length
            ? rectanglesStorage.map((data, k) => (
                <MenuItem onClick={() => {
                  // TODO: 
                }}>{k}</MenuItem>
              ))
            : <>No Item</>
          }
        </MenuList>
      </Menu>
    </>
  );
}