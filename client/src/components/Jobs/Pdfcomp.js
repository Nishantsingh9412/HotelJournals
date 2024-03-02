import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from 'react';

function Pdfcomp(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    
    return (
        <div className="pdf-div mt-4">
            {props.pdfFile &&
                (props.pdfFile.includes('.pdf') ||
                    props.pdfFile.includes('.doc') ||
                    props.pdfFile.includes('.docx'))
                ?
                <>
                    <div
                        style={{
                            border: '1px solid black',
                            padding: '10px',
                            borderRadius: '20px 20px 20px 20px'
                        }}
                    >

                        <iframe
                            // src={`${props.pdfFile}#page=${pageNumber}`}
                            src={
                                props.pdfFile.includes('.pdf') ?
                                    `${props.pdfFile}#page=${pageNumber}` :
                                    `https://docs.google.com/gview?url=${props.pdfFile}&embedded=true`
                            }
                            width="100%"
                            height="500px"
                            type="application/pdf"
                        >
                        </iframe>
                    </div>
                    <>
                        <div className='p-2'>
                            <small>
                                If you unable to view your file please
                                <a
                                    className="text-primary ml-1"
                                    style={{
                                        cursor: 'pointer',
                                        textDecoration: 'none'
                                    }}
                                    href={props.pdfFile}
                                    target="_blank"
                                >
                                    download file from here
                                </a>
                            </small>
                        </div>
                    </>
                </>
                :
                <>
                    <div
                        style={{opacity: '0.5'}}
                    >
                        <h2> No CV uploaded by user </h2>
                    </div>
                </>
            }


        </div>
    );
}

export default Pdfcomp;