import { createContext } from "react";
import { Character } from "../../apollo/models";



export const CharacterPageContext = createContext<Partial<Character>>({});