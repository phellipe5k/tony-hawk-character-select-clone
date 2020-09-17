import React, {Component} from 'react';
import { Transition } from 'react-transition-group'
class Character extends Component {

  VerifyStyle = (style) => {
    if (style === 'Vert') {
      return 'images/elements/vert.png'
    } else if(style === 'Rua') {
      return  'images/elements/rua.png'
    } else {
      return  'images/elements/pista.png'
    }
  };

  render() {
    const { name, city, char, position, style, thumb } = this.props
    return (
          <div className={`character`}>
              <img src={char} className={`charImage ${this.props.anim}`} alt={name}/>
              <div className='information'>
                <h1 className={`name ${this.props.anim}`}>{name}</h1>
                <p className={`city ${this.props.anim}`}>{city}</p>
                <div className='posi-style'>
                  <div className='position'>
                    <h3 className='kindof'>Posição</h3>
                    <img src={
                      (position === 'Reg') ? 'images/elements/reg.png' : 'images/elements/pateta.png'
                    } alt={name} className={this.props.anim}/>
                    <p>{position}</p>
                  </div>
                  <div className='style'>
                    <h3>Estilo</h3>
                    <img src={this.VerifyStyle(style)} alt={name} className={this.props.anim}/>
                    <p>{style}</p>
                  </div>
                </div>
                <div className='thumb-wrap' onClick={this.props.modalOn}>
                <img src={thumb} className='thumb' alt={name}/>
                </div>
              </div>
            </div>
          
      
    )
  }
}
export default Character;