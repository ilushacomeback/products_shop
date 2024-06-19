import React from 'react';
import styled from 'styled-components';

const CustomBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    flex-wrap: nowrap;
`

const mediaQuery768px = '@media (max-width: 768px)';

export const ResponsiveBox = styled(CustomBox)`
  ${mediaQuery768px} {
    display: none;
  }
`;


export const WelcomeText: React.FC = () => {
  return (
    <ResponsiveBox>
      <h1 style={{ fontSize: '16px' }} >WELCOME</h1>
      <p style={{marginTop: '10px', textAlign: 'center', letterSpacing: '1px'}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        laborum veniam harum adipisci, optio asperiores, blanditiis sequi,
        necessitatibus nam saepe maiores minus.
      </p>
    </ResponsiveBox>
  );
};
