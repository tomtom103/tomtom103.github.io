import { ThemeOptions, PaletteMode } from '@mui/material/styles';
import { getDesignTokens } from './primitives';
import { navigationCustomizations, inputsCustomizations } from './customizations';

export default function getTheme(mode: PaletteMode): ThemeOptions {
  return {
    ...getDesignTokens(mode),
    components: {
      ...navigationCustomizations,
      ...inputsCustomizations,
    },
  };
}
