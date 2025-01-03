import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query GET_ALL_CHARACTERS($page: Int!, $name: String!, $status: String!, $species: String!, $type: String!, $gender: String!) {
	  characters(page: $page, filter: {
      name: $name,
      status: $status,
      species: $species,
      type: $type,
      gender: $gender
      }) {
      info {
        count 
        pages
        next
        prev
      }
      results {
        id
        name
        image
        species
      }
      }
  }
`
export const GET_CHARACTER_FULL = gql`
  query GET_CHARACTER_FULL($id: ID!) {
  	character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
      }
      location {
        id
        name
      }
      image
      episode {
        id
        name
        air_date
      }
      created
    }
  }
`

export const GET_ALL_LOCATIONS = gql`
  query GET_ALL_LOCATIONS($page: Int!, $name: String!, $dimension: String!, $type: String!) {
    locations(
      page: $page
      filter: {name: $name, dimension: $dimension, type: $type}
    ) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`

export const GET_LOCATION_FULL = gql`
    query GET_ALL_LOCATIONS($id: ID!) {
	    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        species
        image
      }
      
  }
}
`

export const GET_ALL_EPISODES = gql`
  query GET_ALL_LOCATIONS($page: Int!, $name: String!) {
  	episodes(page: $page, filter: {name: $name}) {
  	info {
  count
      pages
      next
      prev
    }
      results {
        id
        name
        air_date
        episode
  
      }
    }  
  }
`
export const GET_EPISODE_FULL = gql`
query GET_EPISODE_FULL($id: ID!) {
	episode(id: $id) {
		id
    name
    air_date
    episode
    characters {
      id
      name
      species
      image
    }

  }  
}

`