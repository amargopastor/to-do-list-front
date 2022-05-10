import { Menu } from '../components/Menu';
import { SWRConfig } from 'swr';
import { fetcher } from '../lib/fetcher';

const App = ({ Component, pageProps }) => (
    <>
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher,
      }}
    >
        <header>
        <Menu />
      </header>
      <main>
      <Component {...pageProps} />
      </main>
    </SWRConfig>
    </>
)
export default App;