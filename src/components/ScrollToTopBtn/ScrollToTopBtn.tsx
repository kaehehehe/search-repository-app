import { useEffect, useState } from 'react';
import { FaArrowUp as IcArrowUp } from 'react-icons/fa';

import * as S from './style';

const ScrollToTopBtn = () => {
  const [display, setDisplay] = useState('none');

  const handleScroll = () => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (window.pageYOffset > 688) {
        setDisplay('flex');
      } else {
        setDisplay('none');
      }
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <S.ArrowUp
      display={display}
      onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
    >
      <IcArrowUp className="arrow-up-icon" />
    </S.ArrowUp>
  );
};

export default ScrollToTopBtn;
