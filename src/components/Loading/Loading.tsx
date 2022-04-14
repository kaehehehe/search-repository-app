import React from 'react';
import OctocatImage from '../../assets/octocat.png';
import * as S from './style';

const Loading = () => {
  return (
    <S.Loading>
      <S.Octocat src={OctocatImage} alt="octocat" />
      <span>Loading...</span>
    </S.Loading>
  );
};

export default Loading;
