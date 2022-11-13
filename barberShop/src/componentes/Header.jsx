import React from 'react'
import '../styles/componentes/Header.sass'

function Header()  {
  return (
    <header className='header__container'>
        <nav>
          <img src="/img/barbearia-logo.png" alt=""  className='image__logo'/>
          <button type='submit' className='button__theme'>
            <img src="/img/moon.png" alt="" />
            <p>Dark</p>
          </button>
        </nav>
    </header>
  )
}

export default Header;