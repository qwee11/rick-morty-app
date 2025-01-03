import { createContext } from 'react'

interface ISearchQueryContext {
    name: string,
    setName: (newState: string) => void;

    gender: string,
    setGender: (newState: string) => void,

    status: string,
    setStatus: (newState: string) => void,

    species: string,
    setSpecies: (newState: string) => void,

    modalVisible: boolean,
    setModalVisible: (newState: boolean) => void
}

export const SearchCharactersContext = createContext<ISearchQueryContext>({
    name: '',
    setName: () => { },

    gender: '',
    setGender: () => { },

    status: '',
    setStatus: () => { },

    species: '',
    setSpecies: () => { },

    modalVisible: false,
    setModalVisible: () => { }
});