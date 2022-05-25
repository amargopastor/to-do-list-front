import { Container, Box } from '@mui/material';
import { SWRConfig } from 'swr';
import { AccountMenu } from '../components/Menu';
import { fetcher } from '../lib/fetcher';

const App = ({ Component, pageProps }) => (
  <SWRConfig
    value={{
      refreshInterval: 3000,
      fetcher,
    }}
  >
    <Container fixed>
      <header>
        <AccountMenu />
      </header>
      <Component {...pageProps} />
    </Container>
  </SWRConfig>
);
export default App;
