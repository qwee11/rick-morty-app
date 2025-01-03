import { useContext } from 'react'
import { SearchLocationsContext } from './SearchLocationsContext';

const AdvancedSearchFilters = () => {
    const { dimension, setDimension, type, setType } = useContext(SearchLocationsContext);

    return (
        <>
            <input
                type="text"
                name="locationsNameSearch"
                id="locationsNameSearch"
                value={dimension}
                onChange={e => setDimension(e.target.value)}
                placeholder='Dimension'
            />
            <input
                type="text"
                name="locationsNameSearch"
                id="locationsNameSearch"
                value={type}
                onChange={e => setType(e.target.value)}
                placeholder='Type'
            />
        </>
    )
}

export default AdvancedSearchFilters