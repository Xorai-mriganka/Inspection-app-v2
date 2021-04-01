import React from 'react'

import styled from 'styled-components'
import External from './External/External'
import Internal from './Internal/Internal'

const Container = styled.div`
    display: flex;
    flex-direction:column;
    width:100%;
    height:auto;
    
`
function Inspection() {
    return (
        <Container>
            <External part="EXTERNAL"/>
            <Internal part="INTERNAL"/>
        </Container>
    )
}

export default Inspection
