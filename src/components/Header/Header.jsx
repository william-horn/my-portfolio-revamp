
import React, { useEffect } from 'react';
import HeaderCSS from './Header.module.css';

const Header = () => {

    return (
        <header className={`${HeaderCSS.headerContainer}`}>

            {/* Header background image */}
            <img
            className={HeaderCSS.headerBackgroundImg}
            src="./assets/images/header-background-img.png"
            />

            {/* Header content begins */}
            <div className={`${HeaderCSS.headerContent} flex-row-wrap pd-5`}>
                <img 
                className={`${HeaderCSS.profileImg} mg-3-right pd-1`} 
                src="./assets/images/pfp-0.png"
                />

                <div className={`${HeaderCSS.portfolioContacts} pd-2-top pd-3-left pd-3-right pd-2-bottom flex-column`}>
                    <h1 className={`${HeaderCSS.portfolioName}`}>{'<'} William Horn {'/>'}</h1>
                    <div className="flex-column flex-center mg-2-bottom-all mg-2-top-all">
                        <p>{'{ Name: \'William J. Horn\' }'}</p>
                        <p>{'{ File: My_Portfolio }'}</p>
                        <p>{'{ Github:'} <a href="https://github.com/william-horn">https://github.com/william-horn</a> {'}'}</p>
                        <p>{'{ Email: williamjosephhorn@gmail.com }'}</p>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;