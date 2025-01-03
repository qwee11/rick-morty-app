import './style.scss'
import Spinner from '../../components/Spinner/Spinner';
import CompoundCard from '../../components/CompoundCard/CompoundCard';
import EntityInfoBar from '../../components/EntityInfoBar/EntityInfoBar';
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { Episode } from '../../apollo/models';
import { GET_EPISODE_FULL } from '../../apollo/queries';
import useErrorHandler from '../../hooks/useErrorHandler';

const EpisodePage = () => {
    const { id } = useParams();

    const { data, loading, error } = useQuery<{ episode: Episode }>(GET_EPISODE_FULL, { variables: { id } })
    useErrorHandler(error);

    if (loading) {
        return <Spinner />
    }

    return (
        <div className='episode-page' >
            {data &&
                <>
                    <EntityInfoBar
                        headingTitle={data.episode.name}

                        additionalHeader1='Episode'
                        additionalInfo1={data.episode.episode}

                        additionalHeader2='Date'
                        additionalInfo2={data.episode.air_date}
                    />
                    <div className='episode-page__heading' >
                        <p className='bold bigger' >
                            Cast
                        </p>
                    </div>
                    <div className="episode-page__cast">
                        {data.episode.characters.map(character =>
                            <CompoundCard key={character.name + character.id} linkTo={`/characters/` + character.id} >
                                <CompoundCard.Image imageUrl={character.image} />
                                <CompoundCard.Title dottedText title={character.name} />
                                <CompoundCard.SubTitle title={character.species} />
                            </CompoundCard>
                        )}
                    </div>
                </>
            }
        </div>
    )
}

export default EpisodePage