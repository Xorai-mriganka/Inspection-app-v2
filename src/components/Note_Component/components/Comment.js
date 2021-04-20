import React from 'react';
import styled from 'styled-components';
import commentItemList from '../../../data/CommentListData';


const Comment = ({sendDataToParent}) => {
    return (
            <Container>
                <Title>
                    <span>Saved Comments</span>
                </Title>
                <CommentList>  
                    {  
                        commentItemList.map(item => (
                            <CommentListItem onClick={() =>sendDataToParent(item.text,true)} key={item.key}>
                                {item.text}
                            </CommentListItem>
                        ))
                    }      

                </CommentList>
                <Button>
                    Submit Notes
                </Button>
            </Container>   
    )
}

export default Comment;

const Container = styled.div`
    margin-top: 4%;

`
const Title = styled.div`
    span{
        margin-left: 9px;
        font-weight: 600;
        display: flex;
        align-items: center;
    }
`
const CommentList = styled.div`
    display: grid;
    justify-content: center;
    margin-top:15px;
`

const CommentListItem = styled.div`
    // border: 1px solid #bbb;
    border: none;
    margin-top: -1px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    // font-weight: 600;
    border-radius: 4px;
    padding: 3px;
    margin: .5px;
    background: #f8f8f8;
    :hover {
        background: #4863A0;
        color: white;
    }
    
    
`

const Button = styled.button`
    margin-top: 4%;
    background: #d00000;
    color: white;
    border: none;
    width: 100%;
    height: 37.5%;
    cursor: pointer;
    font-family: 'Martel Sans', sans-serif;
    font-size: 15px;
`
