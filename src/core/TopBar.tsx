import * as React from 'react';
import { alpha, styled, PaletteMode } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ToggleColorMode from '@components/ToggleColorMode';
import LinkButton from '@components/LinkButton';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

interface TopBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export default function TopBar(props: TopBarProps) {
  // TODO: Wrap this in a dispatch style statement with
  // `React.useContext`
  const { mode, toggleColorMode } = props;

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 2 }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <LinkButton to="/home" variant="text" color="info" size="small">
                Home
              </LinkButton>
              <LinkButton to="/about" variant="text" color="info" size="small">
                About
              </LinkButton>
              <LinkButton to="/skills" variant="text" color="info" size="small">
                Skills
              </LinkButton>
              <LinkButton to="/experiences" variant="text" color="info" size="small">
                Experiences
              </LinkButton>
              <LinkButton
                to="/projects"
                variant="text"
                color="info"
                size="small"
                sx={{ minWidth: 0 }}
              >
                Projects
              </LinkButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={() =>
                openInNewTab(
                  'https://raw.githubusercontent.com/tomtom103/tomtom103.github.io/main/assets/Resume.pdf',
                )
              }
            >
              Download Resume
            </Button>
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <LinkButton to="/home" fullWidth>
                  Home
                </LinkButton>
                <LinkButton to="/skills" fullWidth>
                  Skills
                </LinkButton>
                <LinkButton to="/experiences" fullWidth>
                  Experiences
                </LinkButton>
                <LinkButton to="/projects" fullWidth>
                  Projects
                </LinkButton>
                <MenuItem>
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    onClick={() =>
                      openInNewTab(
                        'https://raw.githubusercontent.com/tomtom103/tomtom103.github.io/main/assets/Resume.pdf',
                      )
                    }
                  >
                    Download Resume
                  </Button>
                  <ToggleColorMode sx={{ ml: 2 }} mode={mode} toggleColorMode={toggleColorMode} />
                </MenuItem>
                <MenuItem />
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
