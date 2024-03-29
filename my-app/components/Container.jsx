'use client';
import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    max-width: 1600px;
    margin: 0 auto;
`;

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;    
`;

export default function Container({children}) {
  return (
    <Root>
        <FlexWrapper>
            {children}
        </FlexWrapper>
    </Root>
  )
}
