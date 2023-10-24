import React from 'react';

const Footer = () => {
    return (
        <footer className='py-10 absolute lg:block hidden bottom-0 
        bg-gradient-to-r from-Bright-orange via-Dark-cyan to-Very-dark-cyan
        w-full text-white text-center'>
                Challenge by{" "}
            <a href="https://www.frontendmentor.io?ref=challenge" 
                target="_blank" 
                rel="noreferrer" 
                className='underline underline-offset-4'>
                    Frontend Mentor
            </a>. 
                Coded with enthusiasm by {""}<a href="https://github.com/chungvuiloong" className='underline underline-offset-4'>Jere/ Chung Vui Loong</a>.
        </footer>
    );
};

export default Footer;