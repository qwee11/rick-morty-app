import { useParams } from 'react-router-dom'
import './style.scss'
import Header from './Header';
import Spinner from '../../components/Spinner/Spinner';
import CharacterInfo from './CharacterInfo';
import useErrorHandler from '../../hooks/useErrorHandler';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER_FULL } from '../../apollo/queries';
import { Character } from '../../apollo/models';
import { CharacterPageContext } from './CharacterPageContext';

const CharacterPage = () => {
    const { id } = useParams();

    const { data, loading, error } = useQuery<{ character: Character }>(GET_CHARACTER_FULL, { variables: { id } });

    useErrorHandler(error);

    if (loading) {
        return <Spinner />
    }

    return (
        <div className='character-page' >
            {data &&
                <CharacterPageContext.Provider value={data.character!} >
                    <Header />
                    <CharacterInfo />
                </CharacterPageContext.Provider>
            }
        </div>

    )
}

export default CharacterPage