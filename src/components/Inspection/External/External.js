import React from 'react'
import Mid from '../../Mid/Mid';
import styled from 'styled-components'
import GridExternal from './gridexternal';

const Container = styled.div`
    height:50%;
`;

function External(props) {
    const section = props.part;
    return (
        <Container>
            <Mid sectionname={section}>
                <GridExternal/>
            </Mid>
        </Container>
    )
}

export default External


