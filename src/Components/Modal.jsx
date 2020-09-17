import React from 'react';

class Modal extends React.Component {
  render() {
    return (
      <div className={`modal ${this.props.modal}`}>
        <img className='close' src={'images/elements/close.png'} onClick={this.props.func} alt='close button' />
        <iframe width="1014" height="600" src={this.props.src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    )
  }
}
export default Modal;