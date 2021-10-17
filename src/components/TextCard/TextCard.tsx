import React from 'react';
import { Link } from 'react-router-dom';

import { buttonAnimation } from 'animations/buttons';
import styled from 'styled-components';

interface Props {
  title: string;
  description: string;
  additionalInfo?: string;
  id: string;
  path: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 128px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  ${buttonAnimation}
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

const Description = styled.h2`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
`;

const AdditionalInfo = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);
`;

export const TextCard = ({ title, description, additionalInfo, path, id }: Props) => {
  const route = `${path}/${id}`;

  return (
    <Link to={route}>
      <Wrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {additionalInfo && <AdditionalInfo>{additionalInfo}</AdditionalInfo>}
      </Wrapper>
    </Link>
  );
};
