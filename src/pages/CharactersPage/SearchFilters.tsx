import { useContext } from "react";
import { SearchCharactersContext } from "./SearchQueriesContext";

const SearchFilters = () => {
    const { name, setName } = useContext(SearchCharactersContext);

    return (
        <>
            <input
                type="text"
                placeholder='Search...'
                name="charactersSearchQuery"
                id="charactersSearchQuery"
                value={name}
                className="characters-page__search-filters__search-input"
                onChange={e => setName(e.target.value)}
            />
        </>
    )
}

export default SearchFilters