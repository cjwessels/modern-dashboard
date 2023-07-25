import { tokens } from './theme';

import { ColorModeContext, useMode } from './theme';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Invoices from './scenes/invoices';
import Form from './scenes/form';
import Calendar from './scenes/calendar';
import FAQ from './scenes/faq';
import Bar from './scenes/bar';
import Pie from './scenes/pie';
import Line from './scenes/line';
import Geo from './scenes/geo';
import GMaps from './scenes/gmaps';
import RandomQuote from './scenes/random';

function App() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar className='sidebar' />
          <main
            className='content'
            sx={{
              '& ::-webkit-scrollbar': {
                // display: "none !important",
                width: '2px !important',
              },
              '& ::-webkit-scrollbar-track': {
                // background: '#868dfb',
                background: '#fff',
              },
              '& ::-webkit-scrollbar-thumb': {
                background: `${
                  theme.palette.mode === 'dark'
                    ? colors.blueAccent[300]
                    : colors.blueAccent[100]
                } !important`,
              },
            }}
          >
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line />} />
              <Route path='/geography' element={<Geo />} />
              <Route path='/googlemaps' element={<GMaps />} />
              <Route path='/random' element={<RandomQuote />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
