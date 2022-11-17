import React from 'react'
import '../styles/componentes/Header.sass'



function Header()  {
  
  return (
    <header>
        <div className='header__container'>
            <img src="/img/barbearia-logo.png" alt="logo da barbershop" title='BarberShop' className='image__logo'/>
            <nav className='nav__menu'>
              <ul class="menu__dropdown">
                <li class="menu__dropdown__item">
                  <a href="" class="menu__dropdown__link">Sobre</a>
                </li>
                <li class="menu__dropdown__item">
                  <a href="" class="menu__dropdown__link">Contato</a>
                </li>
                <li class="menu__dropdown__item">
                  <a href="" class="menu__dropdown__link">Unidades</a>
                </li>
                <li class="menu__dropdown__item">
                  <a href="" class="menu__dropdown__link">Redes Sociais</a>
                  <ul class="submenu__dropdown">
                  <li class="submenu__dropdown--item">
                    <a href="" class='submenu__dropdown--link'>
                      <i class="fa-brands fa-facebook"></i>
                    </a> 
                  </li>
                  <li class="submenu__dropdown--item">
                    <a href="" class='submenu__dropdown--link'>
                      <i class="fa-brands fa-instagram"></i>
                    </a> 
                  </li>
                  <li class="submenu__dropdown--item">
                    <a href="" class='submenu__dropdown--link'>
                      <i class="fa-brands fa-twitter"></i>
                    </a> 
                  </li>
                  <li class="submenu__dropdown--item">
                    <a href="" class='submenu__dropdown--link'>
                      <i class="fa-brands fa-whatsapp"></i>
                    </a> 
                  </li>
                </ul>
                </li>
              </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header;