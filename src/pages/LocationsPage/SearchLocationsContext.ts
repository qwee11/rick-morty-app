import { createContext } from "react";

type SearchLocationsContext = {
    name: string,
    setName: (newState: string) => void,

    dimension: string,
    setDimension: (newState: string) => void,

    type: string,
    setType: (newState: string) => void,

    modalVisible: boolean,
    setModalVisible: (newState: boolean) => void
}

export const SearchLocationsContext = createContext<SearchLocationsContext>({
    name: '',
    setName: () => { },

    dimension: '',
    setDimension: () => { },

    type: '',
    setType: () => { },

    modalVisible: false,
    setModalVisible: () => { }
});