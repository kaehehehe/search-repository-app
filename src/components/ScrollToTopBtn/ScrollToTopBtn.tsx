import { useEffect, useState } from 'react';

import * as S from './style';

const ScrollToTopBtn = () => {
  const [windowHeight, setWindowHeight] = useState('none');

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > 688) {
        setWindowHeight('flex');
      } else {
        setWindowHeight('none');
      }
    });
  }, [windowHeight]);

  return (
    <S.ArrowUp
      display={windowHeight}
      onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z" />
      </svg>
    </S.ArrowUp>
  );
};

export default ScrollToTopBtn;
