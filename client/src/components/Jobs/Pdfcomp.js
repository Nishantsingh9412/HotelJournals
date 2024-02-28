import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from 'react';

function Pdfcomp(p) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);


    return (
        <div className="pdf-div mt-4">
            {p.pdfFile &&
                (p.pdfFile.includes('.pdf') ||
                    p.pdfFile.includes('.doc') ||
                    p.pdfFile.includes('.docx'))
                &&
                <>
                    <div
                        style={{
                            border: '1px solid black',
                            padding: '10px',
                            borderRadius: '20px 20px 20px 20px'
                        }}
                    >

                        <iframe
                            src={`${p.pdfFile}#page=${pageNumber}`}
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
                                    className="text-primary"
                                    style={{
                                        cursor: 'pointer',
                                        textDecoration: 'none'
                                    }}
                                    href={p.pdfFile}
                                    target="_blank"
                                >
                                    download file from here
                                </a>
                            </small>
                        </div>
                        <center>
                            <div className='p-2'>
                                <small>
                                    If you unable to view your file please
                                    <a
                                        className="text-primary"
                                        style={{
                                            cursor: 'pointer',
                                            textDecoration: 'none'
                                        }}
                                        href={p.pdfFile}
                                        target="_blank"
                                    >
                                        download file from here
                                    </a>
                                </small>
                            </div>
                        </center>
                    </>
                </>
            }


                </div>
            );
}

            export default Pdfcomp;