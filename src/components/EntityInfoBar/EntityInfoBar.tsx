import './style.scss'
import useGoBack from '../../hooks/useGoBack'

type props = {
    headingTitle: string,
    header1: string,
    info1: string,
    header2: string,
    info2: string,
}

const AdditionalInfo = ({ header, info }: { header: string, info: string }) => {
    return (
        <div className="entity-info-bar__additional-info">
            <p className="text-bold text-bigger">{header}</p>
            <p className="smaller">{info}</p>
        </div>
    )
}

const EntityInfoBar = ({
    headingTitle,
    header1,
    info1,
    header2,
    info2,
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
                    <AdditionalInfo header={header1} info={info1} />
                </div>
                <div className="entity-info-bar__additional-info">
                    <AdditionalInfo header={header2} info={info2} />
                </div>
            </div>
        </header>
    )
}

export default EntityInfoBar