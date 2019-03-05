import React from 'react';
import styled from 'styled-components';
import Quotes from './Quotes';
import QuoteForm from './QuoteForm';
import Spinner from './Spinner';


const StyledContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Container() {
  return (
    <StyledContainer>
      <Spinner>
        <Quotes />
        <QuoteForm />
      </Spinner>
    </StyledContainer>
  );
}
