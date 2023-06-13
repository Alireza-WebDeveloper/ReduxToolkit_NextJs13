'use client';

import { AppBar, Box, Stack, Toolbar } from '@mui/material';
import LinkButton from '../Ui/LinkButton';

const Header = () => {
  return (
    <AppBar color="transparent">
      <Toolbar>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            <LinkButton href="/" name="home" />
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
