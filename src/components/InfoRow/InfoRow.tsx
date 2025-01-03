import './style.scss'
import { NavLink } from 'react-router-dom'

type props = {
    heading: string,
    info: string,
    divider?: boolean,
    linkTo?: string
}

const InfoRow = ({ heading, info, divider, linkTo }: props) => {
    if (linkTo) {
        return (
            <li >
                <NavLink to={linkTo} >
                    <div className='info-row-link' >
                        <div className='info-row-link__info'>
                            <p className='info-row__heading' >{heading}</p>
                            <p className='info-row__info' >{info}</p>
                        </div>
                        <div className="arrow-right" />
                    </div>
                    {divider && <hr />}
                </NavLink>
            </li>
        )
    }

    return (
        <li className='info-row' >
            <p className='info-row__heading' >{heading}</p>
            <p className='info-row__info' >{info}</p>
            {divider && <hr />}
        </li>
    )
}

export default InfoRow