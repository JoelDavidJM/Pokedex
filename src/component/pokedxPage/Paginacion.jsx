import '../style/paginacion.css'

const Paginacion = ({pokemonForPage, currentPage, setCurrentPage, pokemon, setPokemonForPage}) => {

  const totalPages = Math.ceil(Number(pokemon?.results.length) / Number(pokemonForPage))
  const pageNumbers = []
  const superPages = [[]]

  let SuperPagesCount = 1
  let SuperPagesIndexs = 0

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
    if(superPages[SuperPagesIndexs].length <= 5) {
      superPages[SuperPagesIndexs].push(i)
      SuperPagesCount++
      if(SuperPagesCount === 6) {
        totalPages / 5 === superPages.length ? '' : superPages.push([])
        SuperPagesIndexs++
        SuperPagesCount - 1
      }
    }
  }
  const lastPage = superPages.at(-1).at(-1)

  const handlePreviusPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const handleEspesificPage = (newNumberPage) => {
    setCurrentPage(newNumberPage)
  } 

  return (
    <nav className="paginacion" role="navigation" aria-label="paginacion">
      <button 
       className={`paginacion__button__previous ${currentPage <= 1 ? 'is-disabled' : ''}`}
       onClick={handlePreviusPage}
       disabled={currentPage <= 1}>
        <i className="paginacion__button__icon bx bx-chevrons-left"></i>
      </button>
      <ul className="pagination__ul">
        <div className="pagination__ul__container">
          {
            superPages.map((arr, arrIndex) => (
              <div key={arrIndex} className={`pagination__ul__group__container ${arr.includes(currentPage) ? '' : 'is-none'}`}>
                {
                  arr.map((pageNumbers, index) => (
                    <li key={pageNumbers} className="pagination__li">
                      <button
                      className={`pagination__ul__li__button ${pageNumbers === currentPage ? 'is-current' : ''}`} 
                      onClick={() => handleEspesificPage(pageNumbers)}>
                        {
                          index === 4 ? pageNumbers === lastPage ? pageNumbers : pageNumbers + '' : pageNumbers
                        }
                      </button>
                    </li>
                  ))
                }
              </div>
            ))
          }
        </div>
      </ul>
      <button
      className={`paginacion__button__next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`}
      onClick={handleNextPage}
      disabled={currentPage >= pageNumbers.length}>
        <i className="paginacion__button__icon bx bx-chevrons-right"></i>

      </button>
    </nav>
  )
}

export default Paginacion