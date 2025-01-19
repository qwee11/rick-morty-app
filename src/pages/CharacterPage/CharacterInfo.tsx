import { useContext, useRef } from 'react'
import InfoRow from '../../components/InfoRow/InfoRow'
import { CharacterPageContext } from './CharacterPageContext';
import useMeasure from '../../hooks/useMeasure';

const MAX_HEIGHT = '100%'

const CharacterInfo = () => {
  const characterAttributeRef = useRef<HTMLUListElement>(null);
  const { height } = useMeasure(characterAttributeRef);
  const { gender, status, species, origin, type, location, episode } = useContext(CharacterPageContext)

  const renderAttributes = () => {
    return (
      <ul ref={characterAttributeRef} className='character-page__info__attributes__list' >
        <InfoRow
          divider
          heading="Gender"
          info={gender!}
        />
        <InfoRow
          divider
          heading="Status"
          info={status!}
        />
        <InfoRow
          divider
          heading="Specie"
          info={species!}
        />
        <InfoRow
          divider
          heading="Origin"
          info={origin!.name}
        />
        <InfoRow
          divider
          heading="Type"
          info={type! || "None"}
        />
        <InfoRow
          heading="Location"
          info={location!.name}
          linkTo={`/rick-morty-app/locations/` + location!.id}
          divider
        />
      </ul>
    );
  };

  const renderEpisodes = () => {
    return (
      <ul
        style={{ maxHeight: height !== null ? `${height}px` : MAX_HEIGHT }}
        className='character-page__info__episodes__list' >
        {episode?.map(episode =>
          <InfoRow
            key={episode.air_date + episode.id}
            heading={episode.name}
            info={episode.air_date}
            linkTo={`/rick-morty-app/episodes/${episode.id}`}
            divider
          />
        )}
      </ul>
    );
  };

  return (
    <section className='character-page__info' >
      <div className="character-page__info__attributes">
        <h3>Attributes:</h3>
        {renderAttributes()}
      </div>
      <div className="character-page__info__episodes">
        <h3>Episodes:</h3>
        {renderEpisodes()}
      </div>
    </section>
  )
}

export default CharacterInfo