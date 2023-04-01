import React from 'react';
import Tesseract from 'tesseract.js';
import { Box, Button, TextField, CardMedia } from "@mui/material";
import {RectangleType} from './types';
import ImageBoxMenu from "./ImageBoxMenu";

const canvas = document.createElement("canvas");

const ctx = canvas.getContext("2d");

export default function ImageBox(props: {
  image: any,
  handleClose: () => void,
}) {
  const {image: currentImageBase64, handleClose} = props;

  // 原寸の画像サイズ
  const [originSize, setOriginSize] = React.useState<{w?:number, h?:number}>({});

  // loading
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // クリックした座標(相対)
  const [rectangles, setRectangles] = React.useState<RectangleType[]>([]);

  // クリックした座標点DOM
  const [rectanglesDOM, setRectanglesDOM] = React.useState<JSX.Element[]>([]);

  // 座標点を結んだ囲い線DOM
  const [rectangleSquareDOM, setRectanglesSquareDOM] = React.useState<JSX.Element[]>([]);

  // 切り取った画像base64
  const [clippedBase64, setClippedBase64] = React.useState<any[]>([]);

  // 読み込んだテキスト
  const [ocrText, setOcrText] = React.useState<string>("");


  // 座標に変更があったとき、座標点DOM・囲い線DOM・切り取った画像データを更新
  React.useEffect(() => {
    setRectanglesDOM([]);
    for (let i = 0; i < rectangles.length; i++) {
      const point = rectangles[i];

      // 座標点DOM作成
      setRectanglesDOM(prev => [...prev, (
        <div
          key={i}
          style={{ position: 'absolute', left: point.x, top: point.y, transform: 'translate(-50%, -50%)' }}
          onClick={() => handleRectangleClick(i)}
        >
          <span style={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 6px'
          }}>{i + 1}</span>
        </div>
      )]);
    }

    // 2点ずつセットにして切り取り、囲い線DOM作成
    setClippedBase64([]);
    setRectanglesSquareDOM([]);
    for (let i = 0; i < rectangles.length; i += 2) {
      const pointA = rectangles[i];
      const pointB = rectangles[i + 1];

      if (pointA && pointB) {
        // 原寸
        const oX1 = Math.min(pointA.oX, pointB.oX);
        const oX2 = Math.max(pointA.oX, pointB.oX);
        const oY1 = Math.min(pointA.oY, pointB.oY);
        const oY2 = Math.max(pointA.oY, pointB.oY);
        const oW = oX2 - oX1;
        const oH = oY2 - oY1;
        // 相対
        const x1 = Math.min(pointA.x, pointB.x);
        const x2 = Math.max(pointA.x, pointB.x);
        const y1 = Math.min(pointA.y, pointB.y);
        const y2 = Math.max(pointA.y, pointB.y);
        const w = x2 - x1;
        const h = y2 - y1;

        canvas.width = oW;
        canvas.height = oH;

        // 画像切り取り
        const imgObj = new Image();
        imgObj.src = currentImageBase64;
        imgObj.onload = () => {
          ctx?.drawImage(imgObj, oX1, oY1, oW, oH, 0, 0, oW, oH);
          const croppedImageBase64 = canvas.toDataURL("image/png");

          setClippedBase64(prev => [...prev, croppedImageBase64]);
        };

        // 囲い線
        setRectanglesSquareDOM(prev =>  [...prev, (
          <Box sx={{
            position: 'absolute',
            left: x1,
            top: y1,
            border: '2px solid red',
            width: w,
            height: h,
            cursor: 'pointer'
          }} />
        )]);
      }
    }

  }, [rectangles]);

  // 画像クリックイベント
  const handleImageClick = (event: any) => {
    // ペースト画像のサイズ
    const img = event.target;
    setOriginSize({w: img.width, h:img.height});

    // 相対座標
    const { offsetX, offsetY } = event.nativeEvent;

    // 表示サイズと原寸サイズの比率を計算
    const widthRatio = img.naturalWidth / img.width;
    const heightRatio = img.naturalHeight / img.height;

    // 原寸座標
    const originalX = offsetX * widthRatio;  // 原寸における座標を計算
    const originalY = offsetY * heightRatio;

    setRectangles(prev => [...prev, {x: offsetX, y: offsetY, oX: originalX, oY: originalY}]);

    console.log({
      w: img.width, h: img.height,
      x: offsetX, y: offsetY,
      oX: originalX, oY: originalY
    });
  }

  // 座標アイコンクリック時
  const handleRectangleClick = (index: number) => {
    setRectangles(rectangles.filter((_, i) => i !== index));
  }

  // 画像 → OCR実行
  const handleConvert = () => {
    // 一旦空白に
    setOcrText("");

    const langs = "eng" + "+jpn";

    for (let i = 0; i < clippedBase64.length; i++) {
      // スピナーON
      setIsLoading(true);

      Tesseract.recognize(
        clippedBase64[i],
        langs,
        { logger: (m: any) => console.log(m) }
      ).then(({ data: { text } }) => {
        const lines = text.split('\n');
        console.log(lines);
        // スピナーOFF
        setIsLoading(false);

        let selectedText: string[] = [];
        lines.forEach(line => {
          selectedText.push(line);
          // if (line.x >= x && line.x <= x + width && line.y >= y && line.y <= y + height) {
          //   selectedText += line.text;
          // }
        });

        setOcrText(selectedText.join("\n"));
      });
    }
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {/* 画像 */}
        <CardMedia
          component='img'
          image={currentImageBase64}
          sx={{
            width: 800,
            Height: 400,
            "@media screen and (max-width:1640px)": {
              maxWidth: 800,
            },
            "@media screen and (max-width:1240px)": {
              maxWidth: 450,
            },
            "@media screen and (max-width:940px)": {
              maxWidth: '100%',
              maxHeight: 320,
            },
          }}
          onClick={ev => handleImageClick(ev)}
        />

        {/* 囲い線 */}
        {rectangleSquareDOM.map(s => s)}

        {/* 画像切り取り座標 */}
        {rectanglesDOM.map(p => p)}
      </div>

      {/* ハンバーガーメニュー */}
      <ImageBoxMenu 
        rectangles={rectangles}
        setRectangles={setRectangles}
        handleClose={handleClose}
      />

      <style>
        {`@keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }`}
      </style>
      <div style={{position: 'relative'}}>
        <Button disabled={isLoading} variant='outlined' sx={{margin: '0 1rem'}} onClick={handleConvert}>convert</Button>

        {
          isLoading &&
          <div style={{
            display: "block",
            position: 'absolute',
            left: 'calc(50% - 8px)',
            top: 'calc(50% - 8px)',
            width: 16,
            height: 16,
            border: "4px solid #90caf94b",
            borderRadius: "50%",
            borderTopColor: "#90caf9",
            animation: "spin 1s linear infinite",
          }} />
        }
      </div>

      <TextField style={{flex: 'auto'}} value={ocrText} multiline />
    </div>
  );
}
