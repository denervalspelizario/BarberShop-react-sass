import React from 'react'
import '../styles/componentes/Header.sass'

function Header()  {
  return (
    <header>
        <div className='header__container'>
            <img src="/img/barbearia-logo.png" alt="logo da barbershop" title='BarberShop' className='image__logo'/>
            <nav className='nav__menu'>
                <ul>
                    <li><a href="#servicos">Sobre</a></li>
                    <li><a href="#sobre">Serviços</a></li>
                    <li><a href="#unidades">Unidades</a></li>
                    <li><a href="#servicos">Sociais</a></li>
                    <li><button type='submit' className='button__theme'>
                            <img src="/img/moon.png" alt="" className='image__button'/>
                            <p>Dark</p>
                        </button>    
                    </li>
                </ul>
                
            </nav>
        </div>
    </header>
  )
}

export default Header;