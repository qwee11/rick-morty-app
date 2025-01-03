import { useContext } from 'react'
import { SearchCharactersContext } from './SearchQueriesContext';

const AdvancedSearchFilters = () => {
    const { gender, setGender, status, setStatus, species, setSpecies } = useContext(SearchCharactersContext);

    return (
        <>
            <select
                value={gender}
                name="characterGenderQuery"
                id="characterGenderQuery"
                onChange={e => setGender(e.target.value)}
                className="characters-page__search-filters__gender-select"
            >
                <option disabled value="">Gender</option>
                <option value=" ">none</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="genderless">Genderless</option>
            </select>
            <select
                value={status}
                name="characterStatusQuery"
                id="characterStatusQuery"
                onChange={e => setStatus(e.target.value)}
                className="characters-page__search-filters__status-select"
            >
                <option disabled value="">Status</option>
                <option value=" ">none</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknow">Unknown</option>
            </select>
            <input
                type="text"
                placeholder='Species...'
                name="charactersSpeciesQuery"
                id="charactersSpeciesQuery"
                value={species}
                onChange={e => setSpecies(e.target.value)}
                className="characters-page__search-filters__species-input"
            />
        </>
    )
}

export default AdvancedSearchFilters