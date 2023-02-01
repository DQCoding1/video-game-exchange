import React from 'react'
import { Link } from 'react-router-dom' 
import { routes } from '../../routes/routes'
import playLogo from "../../assets/play-logo.png"
import xboxLogo from "../../assets/xbox-logo.png"
import './EntryPage.scss'


const EntryPage = () => {
  return (
    <header className='header'> 
      <h1 className='header__h1'>Video Game Exchange</h1>
      <p className='header__p'>What games do you want to exchange ?</p>
      <div className='header__cards'>
      <Link to={routes.PLAYANDXBOX} className='header__card'>
          <h2 className='header__h2'>PlayStation and Xbox</h2>
          <div className='header__containerplayxbox'>
            <img 
              src={playLogo} 
              alt='playstation and xbox logo'
              className='header__img'
            />      
            <img
            src={xboxLogo} 
            alt='xbox logo'
            className='header__img'
            />      
          </div>
        </Link>
        <Link to={routes.PLAYSTATION} className='header__card--play'>
          <h2 className='header__h2'>PlayStation</h2>
          <img 
            src={playLogo} 
            alt='playstation logo'
            className='header__img'
          />
        </Link>
        <Link to={routes.XBOX} className='header__card--xbox'>
          <h2 className='header__h2'>Xbox</h2>
          <img 
            src={xboxLogo}
            alt='xbox logo'
            className='header__img'
          />
        </Link>
      </div>    
    </header>
  )
}

export default EntryPage
