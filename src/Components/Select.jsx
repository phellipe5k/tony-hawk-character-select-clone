import React, {Component} from 'react';
class Select extends Component {

  render() {
    return (
      <a className='aimg-profile' href='#'>
        <img src={this.props.perfil} onClick={this.props.func} className={this.props.classes} alt={this.props.alt}/> 
        
      </a>
    ) 
  }
}
export default Select;