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

                        header1='Episode'
                        info1={data.episode.episode}

                        header2='Date'
                        info2={data.episode.air_date}
                    />
                    <div className='episode-page__heading' >
                        <h3>
                            Cast
                        </h3>
                    </div>
                    <div className="episode-page__cast">
                        {data.episode.characters.map(character =>
                            <CompoundCard key={character.name + character.id} linkTo={`/rick-morty-app/characters/` + character.id} >
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