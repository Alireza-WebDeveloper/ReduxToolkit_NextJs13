'use client';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colors, CssBaseline } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

// Custom Font Local
// const fontSansPro = localFont({
//   src: '../public/fonts/SanPro/SourceSansPro-BlackItalic.ttf',
// });

const theme = createTheme({
  direction: 'ltr',
  palette: {
    mode: 'dark',
  },
});

export default function RootStyleRegistry({ children }: { children: any }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({
      key: 'muirtl',
      stylisPlugins: [prefixer, rtlPlugin],
    });
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) return null;
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
