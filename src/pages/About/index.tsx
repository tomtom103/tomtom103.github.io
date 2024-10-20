/* eslint react/no-unescaped-entities: 0 */
import * as React from 'react';
import Box from '@mui/material/Box';
import { TypeAnimation } from 'react-type-animation';
import InProgress from '@components/InProgress';

export default function About() {
  const [displayed, setDisplayed] = React.useState<boolean>(false);

  return (
    <Box sx={{ width: '100%' }}>
      {displayed ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <InProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            mb: 20,
          }}
        >
          <TypeAnimation
            sequence={[
              'Hello!',
              2000,
              'My name is Thomas Caron.',
              2000,
              'Welcome to my personal portfolio',
              2000,
              'I am a Software Engineer from Montreal, Canada',
              1000,
              'A new version of this site should be published shortly.',
              1000,
              'Thank you for your patience.',
              1000,
              () => setDisplayed(true),
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '3em', fontWeight: 'bold' }}
            preRenderFirstString
          />
        </Box>
      )}
    </Box>
  );
}
