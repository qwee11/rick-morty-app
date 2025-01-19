import { useEffect, useState } from 'react'
import './style.scss'
import Spinner from '../../components/Spinner/Spinner';
import SearchFilters from './SearchFilters';
import AdvancedSearchFilters from './AdvancedSearchFilters';
import Pagiantion from '../../components/Pagination/Pagiantion';
import SearchBarCompound from '../../components/SearchBarCompound/SearchBarCompound';
import { GET_ALL_CHARACTERS } from '../../apollo/queries';
import { CharacterFilterQuery, CharactersResponse } from '../../apollo/models';
import { useLazyQuery } from '@apollo/client';
import useErrorHandler from '../../hooks/useErrorHandler';
import useDebounce from '../../hooks/useDebounce';
import { SearchCharactersContext } from './SearchQueriesContext';
import CompoundCard from '../../components/CompoundCard/CompoundCard';

const CharactersPage = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const [page, setPage] = useState(1);
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");

    const debouncedNameQuery = useDebounce(name.trim(), 1000);
    const debouncedSpeciesQuery = useDebounce(species.trim(), 1000);

    const [getCharacters, { data, loading, error }] = useLazyQuery<CharactersResponse, CharacterFilterQuery>(GET_ALL_CHARACTERS);

    useErrorHandler(error);

    useEffect(() => {
        getCharacters({
            variables: {
                page: page,
                gender: gender,
                name: debouncedNameQuery.trim(),
                species: debouncedSpeciesQuery.trim(),
                status: status,
                type: ""
            }
        });
    }, [debouncedNameQuery, page, debouncedSpeciesQuery, gender, status])

    useEffect(() => {
        setPage(1);
    }, [debouncedNameQuery, debouncedSpeciesQuery, gender, status]);

    return (
        <SearchCharactersContext.Provider value={{
            name,
            setName,

            gender,
            setGender,

            species,
            setSpecies,

            status,
            setStatus,

            modalVisible,
            setModalVisible
        }}>
            <div className='characters-page' >
                <SearchBarCompound modalVisible={modalVisible} setModalVisible={setModalVisible} >
                    <SearchBarCompound.MainSearch>
                        <SearchFilters />
                    </SearchBarCompound.MainSearch>
                    <SearchBarCompound.AdvancedSearch>
                        <AdvancedSearchFilters />
                    </SearchBarCompound.AdvancedSearch>
                </SearchBarCompound>
                {loading
                    ? <Spinner />
                    :
                    <>
                        <div className='characters-page__characters' >
                            {data?.characters.results.map(character =>
                                <CompoundCard linkTo={`/rick-morty-app/characters/${character.id}`} key={character.id + character.name} >
                                    <CompoundCard.Image imageUrl={character.image} />
                                    <CompoundCard.Title title={character.name} />
                                    <CompoundCard.SubTitle title={character.species} />
                                </CompoundCard>
                            )}
                        </div>
                        {data &&
                            <Pagiantion maxPage={data.characters.info.pages} currentPage={page} setPage={setPage} />
                        }
                    </>
                }
            </div>
        </SearchCharactersContext.Provider>
    )
}

export default CharactersPage