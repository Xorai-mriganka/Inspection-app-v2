import React ,{useContext, useState} from 'react';
import styled from 'styled-components';
import {ListContext,BoolContext} from '../../NoteMain';

function Note() {

    const list = useContext(ListContext);
    const bool = useContext(BoolContext);

    const[content,setContent] = useState('');

    function handleClick(e) {
        // e.preventDefault();
        // console.log('Button is clicked',list);
        // bool = 'false';
    }
    let comp;
    if(bool)
    {
        comp = <textarea placeholder='write...' value={list} onChange={e=>setContent(e.target.value)}/>
    }
    else{
        comp = <textarea placeholder='write...' value={content} onChange={e=>setContent(e.target.value)}/>
    }

    return (
        <Container>
            <Title>
                <span>Condition</span>
            </Title>
            <NoteContainer>
                {/* <textarea placeholder='write...' value={content} onChange={e=>setContent(e.target.value)}/> */}
                {comp}
            </NoteContainer>   
            <ButtonContainer>
                <button onClick={handleClick}>Edit</button>
            </ButtonContainer>
        </Container>
        
    )
}

export default Note;

const Container = styled.div`
    padding-top: 4%;
    display: grid;
    grid-template-rows: 25px 300px auto;
    font-family: 'Martel Sans', sans-serif;
`

const NoteContainer = styled.div`
    margin-top: 10px;
    textarea{
        width: 90%;
        height: 90%;
        resize: none;
        box-sizing: border-box;
        border-radius: 8px;
        background-color: #f8f8f8;
        font-size: 16px;
        padding: 1em;
        border: none;
    }
    textarea:focus{
        outline: none;
    }
    display: flex;
    justify-content: space-evenly;

`
const Title = styled.div`

    margin-left: 9px;
    // font-weight: 600;
    display: flex;
    align-items: center;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right:5%;
    button{
        border: none;
        border-radius: 6px;
        width: 50px;
        height: 30px;
        cursor: pointer;
        background: #d00000; 
        color: white;
        // :hover {
        //     background: #d00000;
        //     color: white;
        // }
    }
    button:focus{
        outline: none;
    }
`