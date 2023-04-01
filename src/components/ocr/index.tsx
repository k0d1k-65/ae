import React from 'react';
import ImageBox from './ImageBox';
import { Box } from "@mui/material";

export default function Ocr() {
  // 貼り付けた画像
  const [images, setImages] = React.useState<any[]>([]);

  // 画像pasteイベント (画面全体にバインド)
  const handlePaste = (event: any) => {
    const items = event.clipboardData.items;

    // クリップボードの中ループ・・・ではない？なんでループ？
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      // 画像だけ収集
      if (item.type.indexOf('image') !== -1) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          const image = event.target.result;

          setImages(prev => [...prev, image]);
        };

        // なんかonload叩いている的な。
        reader.readAsDataURL(item.getAsFile());
      }
    }
  };

  // 画像×ボタンイベント
  const handleImageClose = (index: number) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  }

  

  return (
    <div onPaste={handlePaste}>
      <h1>OCR Image Converter</h1>

      <Box sx={{
        border: '1px solid',
        margin: 'auto',
        width: 1600,
        height: 600,
        overflowY: 'auto',
        "@media screen and (max-width:1640px)": {
          width: 1200,
        },
        "@media screen and (max-width:1240px)": {
          width: 900,
        },
        "@media screen and (max-width:940px)": {
          width: '95%',
        },
      }}>
        {
          images.length
          ? (
            images.map((image, index) =>
              <ImageBox
                image={image}
                handleClose={() => {handleImageClose(index)}}
              />
            )
          )
          : <>Paste Here Images.</>
        }
      </Box>
    </div>
  );
}
