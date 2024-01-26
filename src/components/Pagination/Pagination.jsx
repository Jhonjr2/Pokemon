import '../style/Pagination.css'

const Pagination = ({ pokemonPerPage, currentPage, setCurrentPage, totalPokemon }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
        pageNumbers.push(i)
    }

    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1)
        // scrollToTop();
    }
    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
        // scrollToTop();
    }
    const onSpecificPage = (n) => {
        setCurrentPage(n)
        // scrollToTop();
    }
    // const scrollToTop = () => {
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // };


    return (
        <div className='pagination_container'>
            <nav className="pagination is-rounded" role="navigation" aria-label="pagination">
                <ul className="pagination-list">
                    <li>
                        <a
                            className={`pagination-link  ${1 === currentPage || currentPage < 6 ? 'disable' : ''}`}
                            onClick={() => onSpecificPage(1)}>1
                        </a>
                    </li>
                    <li className={`puntos ${1 === currentPage || currentPage < 6 ? 'disable' : ''}`}>...</li>
                    {
                        currentPage <= 5 ?
                            pageNumbers.slice(0, 6).map(noPage => (
                                <li key={noPage}>
                                    <a
                                        className={`pagination-link ${noPage === currentPage ? 'is-current' : ''}`}
                                        onClick={() => onSpecificPage(noPage)}>{noPage}
                                    </a>
                                </li>
                            ))
                            :
                            currentPage > 5 && currentPage < pageNumbers.length - 4 ?
                                pageNumbers.slice(currentPage - 4, currentPage + 1).map(noPage => (
                                    <li key={noPage}>
                                        <a
                                            className={`pagination-link ${noPage === currentPage ? 'is-current' : ''}`}
                                            onClick={() => onSpecificPage(noPage)}>{noPage}
                                        </a>
                                    </li>
                                )) : ''

                    }
                    {
                        currentPage >= pageNumbers.length - 4 ?
                            pageNumbers.slice(pageNumbers.length - 6, pageNumbers.length).map(noPage => (
                                <li key={noPage}>
                                    <a
                                        className={`pagination-link ${noPage === currentPage ? 'is-current' : ''}`}
                                        onClick={() => onSpecificPage(noPage)}>{noPage}
                                    </a>
                                </li>
                            ))
                            :
                            currentPage < pageNumbers.length - 4 ?
                                pageNumbers.slice(pageNumbers.length - 1, pageNumbers.length).map(noPage => (
                                    <li className='numberPageFinally' key={noPage} >
                                        <li>...</li>
                                        <a
                                            className={`pagination-link ${noPage === currentPage ? 'is-current' : ''}`}
                                            onClick={() => onSpecificPage(noPage)}>{noPage}
                                        </a>
                                    </li>

                                )) : ''
                    }

                </ul>
                <div className='btn_pagination'>
                    <button
                        className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`}
                        onClick={onPreviusPage}
                        style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto' }}>
                        Previous
                    </button>
                    <button
                        className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`}
                        onClick={onNextPage}
                        style={{ pointerEvents: currentPage >= pageNumbers.length ? 'none' : 'auto' }}>
                        Next
                    </button>
                </div>
            </nav>
        </div>


    )
}

export default Pagination