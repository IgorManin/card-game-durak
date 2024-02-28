import React from 'react';
import { Stack } from '@mui/material';

export const Header = ({ tern }: { tern: string | null }) => {
  console.log('tern', tern);
  return <Stack height="10vh" width="100%" border={1}></Stack>;
};
