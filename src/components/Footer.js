import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.jpg'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="10px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="700px" height="150px" />
        <Typography variant="h5" pb="40px" mt="0" >
          Made by SOHAM & GREGORY 
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer