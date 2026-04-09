import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function PageControls({pageControls, containerProductsRef}){
    function handleNextPage(){
        pageControls.setCurrentPage(pageControls.currentPage + 1)
        handleWindowScroll()
    }
    function handlePrevPage(){
        pageControls.setCurrentPage(pageControls.currentPage - 1)
        handleWindowScroll()
    }

    function handleWindowScroll(){
        if (window.location.pathname === '/admin/dashboard'){
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth'})
        }
    }

    return (
        <div className="page-controls">
            <button className="btn page" onClick={() => handlePrevPage()} disabled={pageControls.pageData.page < 2 ? true : false}><FaArrowLeft className="icon"/></button>
            <p className="page-number">{pageControls.pageData?.page || 1}</p>
            <button className="btn page" onClick={() => handleNextPage()} disabled={pageControls.pageData.page === pageControls.pageData.pages ? true : false}><FaArrowRight className="icon"/></button>
        </div>
    )
}