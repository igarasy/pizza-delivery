import React from 'react';
import * as S from './styled';

const Header = () => {
  return (
    <>
      <S.Wrapper>
        <S.HeaderCard>Pizarria Lucas</S.HeaderCard>
      </S.Wrapper>
      <S.Button>Peça uma pizza</S.Button>
    </>
  );
};

export default Header;
