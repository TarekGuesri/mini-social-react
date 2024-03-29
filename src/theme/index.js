import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export default createMuiTheme({
  spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
  palette: {
    primary: {
      // main: grey[900],
      main: '#37a000',
    },
    secondary: {
      main: grey[200],
    },
  },
});
