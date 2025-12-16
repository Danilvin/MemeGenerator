import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { toJpeg } from "html-to-image";

const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const memeRef= useRef<HTMLDivElement | null>(null);
    const handleExport = () => {
        if (memeRef.current ==null) {
            return;
        }

        const options = {
            quality: 1,
            backgroundColor: "#ffffff", 
        };

        toJpeg (memeRef.current, options)
            .then((dataURL) => {
                const link = document.createElement("a");
                link.download = "meme.jpeg"; 
                link.href = dataURL;
                link.click();
            })
            .catch((error) => {
                console.error("Error exporting image:", error);
            });
    };

        const AddText = ()  => {
            setCount(count + 1);
    };

    return (
        <div>
            <div 
                style={{width: "700px", border: "1px solid", display:"flex", marginLeft:"50px"}}
                ref={memeRef} 
                className="meme mb-5"
            >
                <img src={params.get("url") || undefined} width="250px"/>
                {Array (count)
                .fill(0)
                .map((e) => (
                    <Text />
                ))}
            </div>
            <div style={{margin:"50px"}}>
                <Button style={{marginRight:"10px"}} onClick={AddText}>Add Text</Button>
                <Button variant="success" onClick={handleExport}>
                    Save
                </Button>
            </div>
        </div>
    );
};

export default EditPage;
