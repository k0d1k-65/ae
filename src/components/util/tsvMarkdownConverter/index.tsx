import React, { useState } from 'react';
import { Button, TextareaAutosize } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';

export function TsvMarkdownConverter() {
  const [markdownOutput, setMarkdownOutput] = useState('');
  const [tsvOutput, setTsvOutput] = useState('');

  const tsvToMarkdown = (tsv: any) => {
    const rows = tsv.trim().split('\n');
    const headers = rows.shift().split('\t');

    let output = '| ' + headers.join(' | ') + ' |\n';
    output += '| ' + headers.map(() => '---').join(' | ') + ' |\n';

    rows.forEach((row: any) => {
      const cells = row.split('\t');
      output += '| ' + cells.join(' | ') + ' |\n';
    });

    return output;
  };

  const markdownToTsv = (markdown: any) => {
    const rows = markdown.trim().split('\n');

    rows.splice(1, 1);

    const tsvRows: string[] = [];

    rows.forEach((row: string) => {
      const cells = row.replace(/^\|+|\|+$/g, '').split('|').map((cell: any) => cell.trim());
      tsvRows.push(cells.join('\t'));
    });

    return tsvRows.join('\n');
  };

  const handleConvertToMarkdown = () => {
    const markdown = tsvToMarkdown(tsvOutput);
    setMarkdownOutput(markdown);
  };

  const handleConvertToTsv = () => {
    const tsv = markdownToTsv(markdownOutput);
    setTsvOutput(tsv);
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(markdownOutput);
  };

  const handleCopyTsv = () => {
    navigator.clipboard.writeText(tsvOutput);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 1200,
        margin: '0 auto',
        flexGrow: 1,
      }}
    >
      <div style={{flex: 10}}>
        <Button onClick={handleCopyTsv} variant='outlined'>Copy</Button>
        <Button onClick={_ => setTsvOutput('')} variant='outlined'>Clear</Button>
        <TextareaAutosize
          value={tsvOutput}
          onChange={e => setTsvOutput(e.target.value)}
          style={{
            width: '100%',
            backgroundColor: '#424242',
            color: '#fff',
            borderColor: '#555',
            borderRadius: '4px',
            padding: '8px',
            outline: 'none',
            boxShadow: '0 0 0 2px #555',
          }}
          minRows={10}
          placeholder="TSV"
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Button onClick={handleConvertToMarkdown} style={{ flexGrow: 1, margin: 1}} variant="contained" color="primary">
          <ArrowForwardIcon />
        </Button>
        <Button onClick={handleConvertToTsv} style={{ flexGrow: 1, margin: 1}} variant="contained" color="secondary">
          <ArrowBack />
        </Button>
      </div>

      <div style={{flex: 10}}>
        <Button onClick={handleCopyMarkdown} variant='outlined'>Copy</Button>
        <Button onClick={_ => setMarkdownOutput('')} variant='outlined'>Clear</Button>
        <TextareaAutosize
          value={markdownOutput}
          onChange={e => setMarkdownOutput(e.target.value)}
          style={{
            width: '100%',
            backgroundColor: '#424242',
            color: '#fff',
            borderColor: '#555',
            borderRadius: '4px',
            padding: '8px',
            outline: 'none',
            boxShadow: '0 0 0 2px #555',
          }}
          minRows={10}
          placeholder="Markdown Table"
        />
      </div>
    </div>
  );
}
