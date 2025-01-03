export type ApiInfo = {
    count: number,
    next: number | null,
    pages: number,
    prev: number | null
}

// == CHARACTER TYPES ==

export interface CharacterSmall {
    id: string,
    name: string,
    species: string,
    image: string
}

export interface Character extends CharacterSmall {
    status: string,
    type: string,
    gender: string,
    origin: {
        id: string,
        name: string
    },
    location: {
        id: string,
        name: string
    },
    episode: EpisodeSmall[]
}

export type CharactersResponse = {
    characters: {
        info: ApiInfo,
        results: CharacterSmall[]
    }
}

export type CharacterResponse = {
    character: Character
}

export type CharacterFilterQuery = {
    page: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string
}

// == CHARACTER TYPES ==

// == LOCATIONS TYPES ==

export interface LocationSmall {
    id: string,
    name: string
    dimension: string
    type: string
}

export interface Location extends LocationSmall {
    residents: CharacterSmall[]
}

export type LocationsResponse = {
    locations: {
        info: ApiInfo,
        results: LocationSmall[]
    }
}

export type LocationsFilterQuery = {
    page: number,
    name: string,
    dimension: string,
    type: string
}

// == LOCATIONS TYPES ==

// == EPISODES TYPES ==

export interface EpisodeSmall {
    id: string,
    name: string,
    air_date: string,
    episode: string
}

export interface Episode extends EpisodeSmall {
    characters: Character[],
}

export type EpisodesResponse = {
    episodes: {
        info: ApiInfo,
        results: EpisodeSmall[]
    }
}

export type EpisodesFilterQuery = {
    page: number,
    name: string
}

// == EPISODES TYPES ==