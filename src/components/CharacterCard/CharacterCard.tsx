import React, { ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router-dom';

import { buttonAnimation } from 'animations/buttons';
import { CharactersResult } from 'hooks/useCharacters';
import styled from 'styled-components';

type Props = ComponentPropsWithoutRef<'div'> & CharactersResult;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 244px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  ${buttonAnimation}
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 70%;
`;

const CharacterDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-left: 16px;
`;

const CharacterName = styled.h6`
  font-size: 20px;
  font-weight: 500;
`;

const CharacterSpecies = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.fontSecondary};
`;

export const CharacterCard = ({ name, species, image, id, ...props }: Props) => {
  return (
    <Link to={`/characters/${id}`}>
      <Wrapper {...props}>
        <CharacterImage src={image} alt={name} />
        <CharacterDetails>
          <CharacterName>{name}</CharacterName>
          <CharacterSpecies>{species}</CharacterSpecies>
        </CharacterDetails>
      </Wrapper>
    </Link>
  );
};
