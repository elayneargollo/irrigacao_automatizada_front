import Routes from "../routes";
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider >
  );
}

export default App;
