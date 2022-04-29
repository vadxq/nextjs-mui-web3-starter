import '../styles/globals.css';
import { ReactNode } from 'react';

import type { EmotionCache } from '@emotion/cache';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import type { NextPage } from 'next';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import { SettingsConsumer, SettingsProvider } from '../context/settingsContext';
import Layout from '../layouts';
import ThemeComponent from '../themes';

// @emotion/cache

// ** Extend App Props with Emotion
type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type ExtendedAppProps = AppProps & {
  Component: Page;
  emotionCache: EmotionCache;
};

function MyApp({
  Component,
  pageProps,
  emotionCache = createCache({ key: 'css' }),
}: ExtendedAppProps) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <CacheProvider value={emotionCache}>
      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return (
              <ThemeComponent settings={settings}>
                {getLayout(<Component {...pageProps} />)}
              </ThemeComponent>
            );
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);
