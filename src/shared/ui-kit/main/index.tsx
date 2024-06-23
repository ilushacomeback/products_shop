import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  max-width: 50vw;
  height: calc(100vh - 50px);
`;


const maxHeight348px = '@media (max-height: 460px)';

export const CustomMain = styled(Main)`
  ${maxHeight348px} {
    flex-direction: row;
  }
`;

