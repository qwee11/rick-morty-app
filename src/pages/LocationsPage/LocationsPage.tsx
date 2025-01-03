import { useEffect, useState } from 'react';
import './styles.scss';
import Pagiantion from '../../components/Pagination/Pagiantion';
import SearchFilters from './SearchFilters';
import Spinner from '../../components/Spinner/Spinner';
import AdvancedSearchFilters from './AdvancedSearchFilters';
import SearchBarCompound from '../../components/SearchBarCompound/SearchBarCompound';
import CompoundCard from '../../components/CompoundCard/CompoundCard';
import { LocationsFilterQuery, LocationsResponse } from '../../apollo/models';
import { GET_ALL_LOCATIONS } from '../../apollo/queries';
import { useLazyQuery } from '@apollo/client';
import useDebounce from '../../hooks/useDebounce';
import useErrorHandler from '../../hooks/useErrorHandler';
import { SearchLocationsContext } from './SearchLocationsContext';

const LocationsPage = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');
    const [dimension, setDimension] = useState('');
    const [type, setType] = useState('');

    const debouncedName = useDebounce(name, 1000);
    const debouncedDimension = useDebounce(dimension, 1000);
    const debouncedType = useDebounce(type, 1000);

    const [getLocations, { data, loading, error }] = useLazyQuery<LocationsResponse, LocationsFilterQuery>(GET_ALL_LOCATIONS);

    useErrorHandler(error);

    useEffect(() => {
        getLocations({
            variables: {
                name: debouncedName.trim(),
                dimension: debouncedDimension.trim(),
                type: debouncedType.trim(),
                page
            }
        })
    }, [debouncedDimension, debouncedName, debouncedType, page])

    useEffect(() => {
        setPage(1);
    }, [debouncedDimension, debouncedName, debouncedType])

    return (
        <SearchLocationsContext.Provider value={{
            name,
            setName,

            dimension,
            setDimension,

            type,
            setType,

            modalVisible,
            setModalVisible
        }}>
            <div className='locations-page' >
                <SearchBarCompound setModalVisible={setModalVisible} modalVisible={modalVisible} >

                    <SearchBarCompound.MainSearch>
                        <SearchFilters />
                    </SearchBarCompound.MainSearch>

                    <SearchBarCompound.AdvancedSearch>
                        <AdvancedSearchFilters />
                    </SearchBarCompound.AdvancedSearch>

                </SearchBarCompound>
                {loading
                    ? <Spinner />
                    : <>
                        <div className='locations-page__locations'>
                            {data?.locations.results.map(location => {
                                return (
                                    <CompoundCard
                                        linkTo={`/locations/${location.id}`}
                                        key={location.id + location.name}
                                        contained
                                        bigPadding >
                                        <CompoundCard.Title dottedText title={location.name} />
                                        <CompoundCard.SubTitle title={location.type} />
                                    </CompoundCard>
                                )
                            })}
                        </div>
                        {data &&
                            <Pagiantion
                                currentPage={page}
                                maxPage={data.locations.info.pages}
                                setPage={setPage} />
                        }
                    </>
                }
            </div>
        </SearchLocationsContext.Provider>
    )
}

export default LocationsPage