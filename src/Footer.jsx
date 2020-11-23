import React from 'react';
import styled from 'styled-components';

const Styles = styled.div `
    position: absolute;
    text-align: center;
    bottom: 15px;
    width: 100%;
    height: 2.5rem;
    padding-top: 1.5rem;
`;

const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <>
          <Styles>
            <footer>
                <p>copyright © {year}</p>
            </footer>
          </Styles>         
          
      </>
    );
}

export default Footer;