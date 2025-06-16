import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FB6B6B;
  min-height: 100vh;
  padding: 20px;
  font-family: 'Recursive', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;

`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  img {
    width: 52px;
    margin-right: 10px;
  }
  h1 {
    color: white;
    font-size: 36px;
  }
`;

export const FlashcardBox = styled.div`
  width: 300px;
  background: white;
  border-radius: 5px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);

 
  ion-icon {
    font-size: 24px;
    cursor: pointer;
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  height: 70px;
  background-color: white;
  color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Recursive', sans-serif;
  font-size: 18px;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.05);
`;
