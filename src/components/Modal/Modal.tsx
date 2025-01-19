import './style.scss'

type props = {
    visible: boolean,
    setVisible: (newState: boolean) => void,
    title: string,
    children: React.ReactNode
}

const Modal = ({ visible, title, setVisible, children }: props) => {
    return (
        <div onClick={() => setVisible(false)} className={`modal ${visible ? 'visible' : ''}`} >
            <div onClick={e => e.stopPropagation()} className="modal__content">
                <header className='modal__content__header' >
                    <h3>
                        {title}
                    </h3>
                    <div className='close-icon' onClick={() => setVisible(false)} />
                </header>
                {children}
            </div>
        </div>
    )
}

export default Modal