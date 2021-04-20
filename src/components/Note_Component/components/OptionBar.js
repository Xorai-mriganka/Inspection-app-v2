import React from 'react';
import { useState, useRef } from "react";
import styled from 'styled-components';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ImageIcon from '@material-ui/icons/Image';
import Popup from './Popup';

function OptionBar() {
    
    const [image, setImage] = useState();
    const inputFile = useRef(null);

    const handleFileUpload = e => {
        const { files } = e.target;
        if (files && files.length) {
            // const filename = files[0].name;
            // var parts = filename.split(".");
            // const fileType = parts[parts.length - 1];
        // console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.
            setImage(URL.createObjectURL(files[0]));
        }
    };
  
    const onCameraIconClick = () => {
        inputFile.current.click();
      };

    const [PopupisOpen, setPopupIsOpen] = useState(false);
    const onGalleryIconClick = () => {
        setPopupIsOpen(!PopupisOpen);
    }


    return (
        <Container >
            <input style={{ display: "none" }} ref={inputFile} capture="environment" onChange={handleFileUpload} type="file"/>

            <Camera>
                <CameraAltIcon fontSize='default' onClick={onCameraIconClick}/>
            </Camera>

            <DisplayImage>             
                <ImageIcon fontSize='default' onClick={onGalleryIconClick}/>
                {PopupisOpen && <Popup 
                content = {<>
                            <img src={image} alt="" width='100%' height = '100%'/>
                           </>}
                handleClose={onGalleryIconClick}/>}            
                
            </DisplayImage>
            
        </Container>
    )
}

export default OptionBar;

const Container = styled.div`
    color: white;   
    background: #d00000;
    display: grid;
    grid-template-columns: 100px auto;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
`
const Camera = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    &:hover{
        color: white;
        cursor: pointer;

    }

`
const DisplayImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    
    // img{
    //     width: 130px;
    //     height: 75px;
    // }
`