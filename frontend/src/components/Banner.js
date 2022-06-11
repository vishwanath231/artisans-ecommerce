import React from 'react';
import Styled from 'styled-components';

const Banner = () => {
    return (
        <div className='container max-w-screen-xl mx-auto'>
            <Container>
                <div className="header__content">
                    <h2 className='font-mono'>Artisans are the souls of Indian culture</h2>
                </div>
            </Container>
        </div>
    )
}

const Container = Styled.div `

    width: 100%;
    height: 60vh;
    background: url('images/bg1.jpg');
    // background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
    margin: 5em 0 3em 0;

    &::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.6);
        z-index: -1;
    }

    .header__content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 60vh;
        color: #fff;
        // font-family: "Montserrat",sans-serif;
        font-size: 3rem;
        font-weight: 700;
        padding: 0 15px;
        
        @media(min-width:768px){
            font-size: 50px;
        }
    }
`;

export default Banner