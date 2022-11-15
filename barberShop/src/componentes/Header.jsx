import React from 'react'
import '../styles/componentes/Header.sass'

function Header()  {
  return (
    <header>
        <div className='header__container'>
            <img src="/img/barbearia-logo.png" alt="logo da barbershop" title='BarberShop' className='image__logo'/>
            <nav className='nav__menu'>
                <ul>
                    <li><p><a href="#servicos">Sobre</a></p></li>
                    <li><a href="#sobre">Serviços</a></li>
                    <li><a href="#unidades">Unidades</a></li>
                    <li><a href="#servicos">Sociais</a></li>
                    <li>   
                    </li>
                </ul>
                
            </nav>
        </div>
    </header>
  )
}

export default Header;