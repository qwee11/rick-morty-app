import { useEffect, useState } from 'react'
import './style.scss'
import Spinner from '../../components/Spinner/Spinner';
import Pagiantion from '../../components/Pagination/Pagiantion';
import CompoundCard from '../../components/CompoundCard/CompoundCard';
import SearchBarCompound from '../../components/SearchBarCompound/SearchBarCompound';
import { useLazyQuery } from '@apollo/client';
import { GET_ALL_EPISODES } from '../../apollo/queries';
import { EpisodesFilterQuery, EpisodesResponse } from '../../apollo/models';
import useErrorHandler from '../../hooks/useErrorHandler';
import useDebounce from '../../hooks/useDebounce';

const EpisodesPage = () => {
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');

    const debouncedName = useDebounce(name, 1000);

    const [getAllEpisodes, { data, error, loading }] = useLazyQuery<EpisodesResponse, EpisodesFilterQuery>(GET_ALL_EPISODES);

    useErrorHandler(error);

    useEffect(() => {
        getAllEpisodes({
            variables: {
                page,
                name: debouncedName.trim()
            }
        })
    }, [page, debouncedName])

    useEffect(() => {
        setPage(1);
    }, [debouncedName])


    return (
        <div className='episodes-page' >
            <SearchBarCompound>
                <SearchBarCompound.MainSearch>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Name...' />
                </SearchBarCompound.MainSearch>
            </SearchBarCompound>

            {loading
                ? <Spinner /> :
                <>
                    <div className='episodes-page__episodes'>
                        {data?.episodes.results.map(episode =>
                            <CompoundCard linkTo={`/episodes/${episode.id}`} key={episode.id + episode.name} contained bigPadding >
                                <CompoundCard.Title dottedText title={episode.name} />
                                <CompoundCard.SubTitle title={episode.episode} />
                            </CompoundCard>
                        )}
                    </div>
                    {data &&
                        <Pagiantion currentPage={page} maxPage={data.episodes.info.pages} setPage={setPage} />
                    }
                </>
            }
        </div>
    )
}

export default EpisodesPage