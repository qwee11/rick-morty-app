import { useEffect, useState } from 'react'
import './style.scss'

const PAGES_BEFORE_CURRENT = 1;
const PAGES_AFTER_CURRENT = 2;

type props = {
    currentPage: number,
    setPage: (newState: number) => void,
    maxPage: number
}

const Pagiantion = ({ maxPage, currentPage, setPage }: props) => {
    const [visiblePages, setVisiblePages] = useState<number[]>([]);

    useEffect(() => {
        let pages = [];
        if (currentPage === 1) {
            for (let i = currentPage; i < currentPage + PAGES_AFTER_CURRENT + 1; i++) {
                pages.push(i);
            };
            setVisiblePages(pages);
        } else {
            for (let i = currentPage - PAGES_BEFORE_CURRENT; i < currentPage + PAGES_AFTER_CURRENT; i++) {
                pages.push(i);
            }
            setVisiblePages(pages);
        }
    }, [currentPage])

    const increasePage = () => {
        if (currentPage === maxPage) {
            return false;
        };
        setPage(currentPage + 1);
    }

    const decreasePage = () => {
        if (currentPage === 1) {
            return false;
        }
        setPage(currentPage - 1);
    }

    const setPageHandler = (pageNumber: number) => {
        if (pageNumber > maxPage) {
            return false;
        }
        return setPage(pageNumber);
    }

    return (
        <div className='pagination' >
            <button onClick={() => setPage(1)} >{'<<'}</button>
            <button onClick={decreasePage} >{'<'}</button>
            {visiblePages.map(page =>
                <button
                    key={page}
                    disabled={page > maxPage}
                    className={`${page === currentPage ? 'btn-primary' : ''}`}
                    onClick={() => setPageHandler(page)}
                >
                    {page}
                </button>
            )}
            <button onClick={increasePage} >{'>'}</button>
            <button onClick={() => setPage(maxPage)} >{'>>'}</button>
        </div>
    )
}

export default Pagiantion