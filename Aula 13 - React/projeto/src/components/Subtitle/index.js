import { colors, Typography } from '@mui/material';
import React from 'react';

// import { Container } from './styles';

function Subtitle({subtitle}) {
  return (
    <Typography color={colors.grey[700]} style={{fontWeight:600, marginBottom: 20}} variant="h5">{subtitle}</Typography>
  );
}

export default Subtitle;