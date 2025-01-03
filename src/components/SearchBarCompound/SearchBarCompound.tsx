import React, { createContext, useContext } from 'react'
import './style.scss'
import Modal from '../Modal/Modal';

type props = {
  children: React.ReactNode,
  modalVisible?: boolean,
  setModalVisible?: (newState: boolean) => void
}

type CompoundContext = {
  modalVisible: boolean | undefined,
  setModalVisible: ((newState: boolean) => void) | undefined;
}

const CompoundContext = createContext<CompoundContext>({
  modalVisible: undefined,
  setModalVisible: undefined
});

const MainSearch = ({ children }: { children: React.ReactNode }) => {
  const { setModalVisible } = useContext(CompoundContext);

  return <div className='search-bar-compound__main' >
    {children}
    {setModalVisible &&
      <button className="btn btn-primary search-bar-compound__main__modal-button" onClick={() => setModalVisible(true)} >ADVANCED FILTERS</button>
    }
  </div>
}

const AdvancedSearch = ({ children }: { children: React.ReactNode }) => {

  const { modalVisible, setModalVisible } = useContext(CompoundContext);

  if (modalVisible !== undefined && setModalVisible) {
    return (
      <>
        <Modal visible={modalVisible} title='Filter' setVisible={setModalVisible} >
          <div className="search-bar-compound__advanced inModal">
            {children}
          </div>
        </Modal>
        <div className='search-bar-compound__advanced' >
          {children}
        </div>
      </>
    )
  }

  return (
    <div className="search-bar-compound__advanced">
      {children}
    </div>
  );
}

export default function SearchBarCompound({ children, modalVisible, setModalVisible }: props) {
  return (
    <div className={`search-bar-compound`} >
      <CompoundContext.Provider value={{ modalVisible, setModalVisible }} >
        {children}
      </CompoundContext.Provider>
    </div>
  )
}

SearchBarCompound.MainSearch = MainSearch;
SearchBarCompound.AdvancedSearch = AdvancedSearch;