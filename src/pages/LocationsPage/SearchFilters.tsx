import { useContext } from 'react'
import { SearchLocationsContext } from './SearchLocationsContext';

const SearchFilters = () => {
    const { name, setName} = useContext(SearchLocationsContext);

    return  <input
                type="text"
                name="locationsNameSearch"
                id="locationsNameSearch"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Search...'
            />
}

export default SearchFilters