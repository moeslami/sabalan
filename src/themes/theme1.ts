import {createMuiTheme} from '@material-ui/core/styles';
import {purple, green} from '@material-ui/core/colors';

const palette = {
  primary: { main: '#1976D2' },
  secondary: { main: '#8C9EFF' }
};

const typography = {
  useNextVariants: true,
}

export default createMuiTheme({ palette,  typography });
