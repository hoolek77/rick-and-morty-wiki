import React from 'react';

import { buttonAnimation } from 'animations/buttons';
import arrowRightImg from 'assets/arrowRight.png';
import styled from 'styled-components';

interface Props {
  title: string;
  info: string;
  date?: string;
  arrowRight?: boolean;
}

const Wrapper = styled.div`
  position: relative;
  width: 400px;
  min-height: 64px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #e5e5e5;
  padding: 12px 0;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
`;

const Info = styled.h3`
  font-size: 14px;
  color: #6e798c;
`;

const Date = styled.h5`
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  color: #8e8e93;
`;

const ArrowWrapper = styled.div`
  position: absolute;
  right: 12px;
  width: 24px;
  height: 24px;
  cursor: pointer;

  ${buttonAnimation}
`;

const ArrowRight = styled.img`
  width: 8px;
  height: 12px;
`;

export const CharacterDetailBox = ({ title, info, date, arrowRight }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Info>{info}</Info>
      {date && <Date>{date}</Date>}
      {arrowRight && (
        <ArrowWrapper>
          <ArrowRight src={arrowRightImg} />
        </ArrowWrapper>
      )}
    </Wrapper>
  );
};
