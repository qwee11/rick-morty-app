import { useContext } from 'react';
import { CharacterPageContext } from './CharacterPageContext';
import useGoBack from '../../hooks/useGoBack'

const Header = () => {

    const useBack = useGoBack();

    const {image, name} = useContext(CharacterPageContext);

    return (
        <section className='character-page__header' >
            <div className='character-page__header__button-back'>
                <button onClick={useBack} >
                    <div className='arrow-left' />
                    Go back
                </button></div>
            <figure className='character-page__header__character-image' >
                <img src={image} alt="character image" />
                <figcaption>
                    <h2>{name}</h2>
                </figcaption>
            </figure>
        </section>
    )
}

export default Header