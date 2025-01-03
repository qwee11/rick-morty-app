import { useContext, useEffect, useRef, useState } from 'react'
import InfoRow from '../../components/InfoRow/InfoRow'
import { CharacterPageContext } from './CharacterPageContext';

const CharacterInfo = () => {

  const [episodesElHeight, setEpisodesElHeight] = useState<null | number>(null);
  const characterAttributeRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (characterAttributeRef.current) {
      setEpisodesElHeight(characterAttributeRef.current.offsetHeight);
    };
  }, [characterAttributeRef]);

  const { gender, status, species, origin, type, location, episode } = useContext(CharacterPageContext)

  return (
    <section className='character-page__info' >
      <div className="character-page__info__attributes">
          <h3>Attributes:</h3>
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
            linkTo={`/locations/`+location!.id}
            divider
          />
        </ul>
      </div>
      <div className="character-page__info__episodes">
          <h3>Episodes:</h3>
        <ul
          style={{ maxHeight: episodesElHeight !== null ? +episodesElHeight + "px" : "100%" }}
          className='character-page__info__episodes__list' >
          {episode!.map(episode =>
            <InfoRow
              key={episode.air_date + episode.id}
              heading={episode.name}
              info={episode.air_date}
              linkTo={`/episodes/`+episode.id}
              divider
            />
          )}
        </ul>
      </div>
    </section>
  )
}

export default CharacterInfo