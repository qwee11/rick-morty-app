import { useParams } from 'react-router-dom'
import './style.scss'
import Spinner from '../../components/Spinner/Spinner';
import CompoundCard from '../../components/CompoundCard/CompoundCard';
import EntityInfoBar from '../../components/EntityInfoBar/EntityInfoBar';
import { useQuery } from '@apollo/client';
import { GET_LOCATION_FULL } from '../../apollo/queries';
import { Location } from '../../apollo/models'
import useErrorHandler from '../../hooks/useErrorHandler';

const LocationPage = () => {
    const { id } = useParams();

    const { error, loading, data } = useQuery<{ location: Location }>(GET_LOCATION_FULL, { variables: { id } });

    useErrorHandler(error);

    if (loading) {
        return <Spinner />
    }

    return (
        <div className='location-page' >
            {data &&
                <>
                    <EntityInfoBar
                        headingTitle={data.location.name}

                        header1='Type'
                        info1={data.location.type}

                        header2='Dimension'
                        info2={data.location.dimension}
                    />
                    <div className='location-page__heading' >
                        <p className='text-bold text-bigger' >
                            Residents
                        </p>
                    </div>
                    <div className='location-page__residents' >
                        {data.location.residents.map(resident =>
                            <CompoundCard key={resident.name + resident.id} linkTo={`/rick-morty-app/characters/` + resident.id} >
                                <CompoundCard.Image imageUrl={resident.image} />
                                <CompoundCard.Title dottedText title={resident.name} />
                                <CompoundCard.SubTitle title={resident.species} />
                            </CompoundCard>
                        )}
                    </div>
                </>
            }
        </div>
    )
}

export default LocationPage