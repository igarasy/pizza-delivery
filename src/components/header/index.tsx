import React from 'react';
import * as S from './styled';
import { Typography } from '@mui/material'

const Header = () => {
  return (
    <>
      <S.Wrapper>
      <Typography variant='h3' gutterBottom >Pizarria Lucas</Typography>
      </S.Wrapper>
    </>
  );
};

export default Header;
