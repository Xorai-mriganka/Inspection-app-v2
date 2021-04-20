import React,{useState} from 'react'
import styled from 'styled-components';
import Header from '../components/Note_Component/components/Header'
import OptionBar from '../components/Note_Component/components/OptionBar';
import Note from'../components/Note_Component/components/Note';
import Comment from '../components/Note_Component/components/Comment';
// import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

export const ListContext = React.createContext();
export const BoolContext = React.createContext();

function NoteMain(props){

  const [comment , setComment] = useState('');
  const [bool , setBool] = useState('');

  const sendDataToParent = (data,bool) => { 
    console.log('app',data);
    // console.log('app1',bool);
    setComment(data);
    setBool(bool);
  };
  console.log('name',props.location.nameProps.name.name);
  return (
    <div>
      <ListContext.Provider value={comment}>
        <BoolContext.Provider value={bool}>
          <Container >
              <Header/>
              <OptionBar/>
              <Main>
                <Note name={props.location.nameProps.name.name}/>
                <Comment  sendDataToParent={sendDataToParent} />
              </Main>    
          </Container>
        </BoolContext.Provider>
      </ListContext.Provider>
      
      
    </div>
  );
}

export default NoteMain;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 70px 40px auto;

`

const Main = styled.div`
  background: white;
  display: grid;
  grid-template-rows: 350px  auto;

`
