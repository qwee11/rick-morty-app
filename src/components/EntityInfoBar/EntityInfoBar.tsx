import './style.scss'
import useGoBack from '../../hooks/useGoBack'

type props = {
    headingTitle: string,
    additionalHeader1: string,
    additionalInfo1: string,
    additionalHeader2: string,
    additionalInfo2: string,
}

const EntityInfoBar = ({
    headingTitle,
    additionalHeader1,
    additionalInfo1,
    additionalHeader2,
    additionalInfo2,
}: props) => {
    const useBack = useGoBack();

    return (
        <header className="entity-info-bar" >
            <div className='entity-info-bar__main' >
                <div className='entity-info-bar__main__button-wrapper' >
                    <button onClick={useBack} >
                        <div className="arrow-left" />
                        Go back
                    </button>
                </div>
                <h2>{headingTitle}</h2>
            </div>
            <div className="entity-info-bar__info">
                <div className="entity-info-bar__additional-info">
                    <p className="bold bigger" >{additionalHeader1}</p>
                    <p className="smaller" >{additionalInfo1}</p>
                </div>
                <div className="entity-info-bar__additional-info">
                    <p className="bold bigger" >{additionalHeader2}</p>
                    <p className="smaller" >{additionalInfo2}</p>
                </div>
            </div>
        </header>
    )
}

export default EntityInfoBar