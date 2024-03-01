import React from 'react';
import { Stack } from '@mui/material';
import { WhoMoves } from '../../redux/cardSlice';

export const Header = ({ tern }: { tern: WhoMoves | null }) => {
  return <Stack height="10vh" width="100%" border={1}></Stack>;
};
