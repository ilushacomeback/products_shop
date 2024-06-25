import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  flex-wrap: nowrap;
`;

const maxWidth500px = '@media (max-width: 500px)';
const maxHeight370px = '(max-height: 370px) '

const CustomBox = styled(Box)`
  ${maxWidth500px}, ${maxHeight370px} {
    display: none;
  }
`;

export const WelcomeText = () => {
  return (
    <CustomBox>
      <h1 style={{ fontSize: '16px' }}>WELCOME</h1>
      <p
        style={{ marginTop: '10px', textAlign: 'center', letterSpacing: '1px' }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        laborum veniam harum adipisci, optio asperiores, blanditiis sequi,
        necessitatibus nam saepe maiores minus.
      </p>
    </CustomBox>
  );
};
