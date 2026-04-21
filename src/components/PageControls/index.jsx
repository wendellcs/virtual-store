import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdKeyboardArrowLeft, MdKeyboardArrowRight  } from "react-icons/md";

export default function PageControls({pageControls}){
    const handleNextPage = () => {
        pageControls.setCurrentPage(prev => prev + 1)
    }
    const handlePrevPage = () => {
        pageControls.setCurrentPage(prev => prev - 1)
    }

    const handleSkipToFirstPage = () => {
        pageControls.setCurrentPage(1)
    }
    
    const handleSkipToLastPage = () => {
        pageControls.setCurrentPage(pageControls.pageData.pages)
    }

    return (
        <div className="page-controls">
            <button className="btn page" onClick={() => handleSkipToFirstPage()} disabled={pageControls.pageData.page < 2 ? true : false}><MdKeyboardDoubleArrowLeft className="icon"/></button>
            <button className="btn page" onClick={() => handlePrevPage()} disabled={pageControls.pageData.page < 2 ? true : false}><MdKeyboardArrowLeft className="icon"/></button>
            <p className="page-number">{pageControls.pageData?.page || 1}</p>
            <button className="btn page" onClick={() => handleNextPage()} disabled={pageControls.pageData.page === pageControls.pageData.pages ? true : false}><MdKeyboardArrowRight className="icon"/></button>
            <button className="btn page" onClick={() => handleSkipToLastPage()} disabled={pageControls.pageData.page === pageControls.pageData.pages ? true : false}><MdKeyboardDoubleArrowRight className="icon"/></button>
        </div>
    )
}