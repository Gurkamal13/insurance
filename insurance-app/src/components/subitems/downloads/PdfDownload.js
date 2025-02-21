import React, {useState} from "react";
import {PdfList} from "../../navbar/NavItems"
import "./PdfDownload.css"

function PdfDownload() {
    const [dropdown, setDropdown] = useState(false)
    const handleDropdownToggle = () => {setDropdown(!dropdown)}

    const downloadPDF = async (pdfUrl) => {
        try {
            //const pdfUrl = "/files/Brochure_Smart_Health_Pro_V_2_Web_d48ce59a74.pdf"; // Path from public folder
            const response = await fetch(pdfUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "sample.pdf");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed:", error);
        }
    };

    return (
        <>
            <ul className={handleDropdownToggle ? "pdf-download-menu" : "pdf-download-menu clicked"}>
                {PdfList.map((item, index) =>
                    {
                        return (
                            <li key={index} className={item.cName} onClick={()=>downloadPDF(item.path)}>{item.title}</li>
                        );
                    }
                )}
            </ul>
        </>
    )
}

export default PdfDownload;