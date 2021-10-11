import React from 'react';

import { CharacterDetailBox } from 'components/CharacterDetailBox';
import { ErrorMessage } from 'components/ErrorMessage';
import { Loader } from 'components/Loader';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { useCharacterDetails } from 'hooks/useCharacterDetails';
import styled from 'styled-components';
import { getIdFromPathname } from 'utils/strings';

const CharacterImage = styled.img`
  margin-top: 16px;
  width: 300px;
  height: 300px;
  border: 5px solid #f2f2f7;
  border-radius: 150px;
`;

const CharacterName = styled.h1`
  font-size: 48px;
  line-height: 56px;
  margin: 16px 0 48px 0;
`;

const SectionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SectionTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: #8e8e93;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-bottom: 36px;

  @media screen and (max-width: 520px) {
    width: 300px;
  }
`;

export const CharacterDetails = () => {
  const id = getIdFromPathname();
  const { data, error, loading } = useCharacterDetails({ id });

  if (loading) {
    return (
      <ScreenWrapper>
        <Loader />
      </ScreenWrapper>
    );
  }

  if (error || !data || !data.character) {
    return (
      <ScreenWrapper>
        <ErrorMessage>There is nothing here 😵‍💫</ErrorMessage>
      </ScreenWrapper>
    );
  }

  const { image, name, gender, status, species, origin, type, location, episode } = data.character;

  return (
    <ScreenWrapper>
      <CharacterImage src={image} />
      <CharacterName>{name}</CharacterName>
      <SectionsWrapper>
        <div>
          <SectionTitle>Information</SectionTitle>
          <Section>
            <CharacterDetailBox title="Gender" info={gender} />
            <CharacterDetailBox title="Status" info={status} />
            <CharacterDetailBox title="Specie" info={species} />
            <CharacterDetailBox title="Origin" info={origin.name} />
            {type && <CharacterDetailBox title="Type" info={type} />}
            <CharacterDetailBox title="Location" info={location.name} arrowRight />
          </Section>
        </div>
        <div>
          <SectionTitle>Episodes</SectionTitle>
          <Section>
            {episode.map(({ air_date, name: episodeName, episode: episodeNumber }) => (
              <CharacterDetailBox
                title={episodeNumber}
                info={episodeName}
                date={air_date}
                key={episodeNumber}
                arrowRight
              />
            ))}
          </Section>
        </div>
      </SectionsWrapper>
    </ScreenWrapper>
  );
};
