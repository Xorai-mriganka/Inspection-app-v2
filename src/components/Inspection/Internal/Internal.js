import React from 'react'
import styled from 'styled-components'
import GridInternal from './gridinternal';
import Mid from '../../Mid/Mid';

const Container = styled.div`
    height:50%;
    margin:2rem 0;
`;
function Internal(props) {
   const section = props.part;
   return (
     <Container>
       <Mid sectionname={section}>
           <GridInternal/>
       </Mid>
     </Container>
   );
}

export default Internal
