import React from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Container>
            <Back>
                <ArrowBackIosIcon/>
                <span>
                    <Link to="/Inspection_points">Back</Link>
                </span>
            </Back>
            <Title>
                <span>Edit Note</span>
            </Title>
            
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: grid;
    grid-template-columns: 100px auto;
    align-items: center;
    justify-content: center;
    margin-left: 9px;
    position: relative;
    font-family: 'Martel Sans', sans-serif;
    
`
const Back = styled.div`
    display: flex;
    cursor: pointer;
    position: absolute;
    align-items: center;
    justify-content: center;
    left: 0;
    color: #3090c7;

    span {
        :hover {
            color: #4863A0;
        }
    }
`

const Title = styled.div`


    span {
        color: #0C090A;
        font-size: 18px;
    }
`