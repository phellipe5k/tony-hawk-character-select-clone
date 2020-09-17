import React from 'react';
import Character from './Components/Character';
import Select from './Components/Select';
import Modal from './Components/Modal';
import './App.css';
import data from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: data[0].name,
      city: data[0].city,
      char: data[0].char,
      position: data[0].position,
      style: data[0].style,
      thumb: data[0].thumb,
      link: data[0].videoLink,
      classes: 'img-profile',
      cast: 'main',
      elenco: 'ELENCO ORIGINAL',
      modal: false,
      modalClass: 'none',
      anim: 'anim-enter'
    }
  };

  CharChange = (name) => {
    const newChar = data.find(el => el.name === name);
    this.setState(({
      name: newChar.name,
      city: newChar.city,
      char: newChar.char,
      position: newChar.position,
      style: newChar.style,
      thumb: newChar.thumb,
      link: newChar.videoLink,
    }))
  };

  handleTrade = (cast) => {
    if (cast === 'main') {
      this.setState((
        {cast: 'new',
        elenco: 'NOVO ELENCO',
        name: data[13].name,
        city: data[13].city,
        char: data[13].char,
        position: data[13].position,
        style: data[13].style,
        thumb: data[13].thumb,
        link: data[13].videoLink,
      }))
    } else {
      this.setState(({
        cast: 'main',
        elenco: 'ELENCO ORIGINAL',
        name: data[0].name,
        city: data[0].city,
        char: data[0].char,
        position: data[0].position,
        style: data[0].style,
        thumb: data[0].thumb,
        link: data[0].videoLink,
      }))
    }
  };

  handleModal = () => {
    if (this.state.modal === false) {
      this.setState({modalClass: ''});
      this.setState({modal: true});
    } else {
      this.setState({modalClass: 'none'});
      this.setState({modal: false});
    }
  };

  render() {
    const { name, city, char, position, style, thumb, cast } = this.state
    return (
      <div className='allScreen'>
        <div className='wallpaper'></div>
        <Character 
          name={name}
          city={city}
          char={char}
          position={position}
          style={style}
          thumb={thumb}
          modalOn={() => {this.handleModal()}}
          anim={this.state.anim}
        />
        <div className='select'>
          <h1 className='title'>
            {this.state.elenco}
            <button className='handleTrade btn1'  onClick={() => {this.handleTrade(this.state.cast)}} >
              <FontAwesomeIcon icon={faAngleLeft} className='hoverIcon ot' />
            </button>
            <button className='handleTrade btn2' onClick={() => {this.handleTrade(this.state.cast)}} >
              <FontAwesomeIcon icon={faAngleRight} className='hoverIcon' />
            </button>
          </h1>
          <div className='select-wrap'>
          {
            data.filter((el) => el.cast === cast).map((el, index) => (
              <Select
                perfil={el.perfil}
                key={index}
                func={(event) => {
                  if (el.name !== this.state.name) {
                      this.setState(({anim: 'anim'}))
                    setTimeout(() => {
                      this.CharChange(el.name)
                      this.setState(({anim: 'anim-enter'}))
                    }, 260)   
                  }    
                }}
                classes={this.state.classes}
                alt={el.name}
              />
            ))
          }
          </div>
            </div>
            <Modal 
              modal={this.state.modalClass}
              src={this.state.link}
              func={() => {this.handleModal()}}
            />
      </div>  
    )
  }
  
}

export default App;
