import './styles/buttons.scss'
import './styles/instance-modal.scss'
import React from 'react';
import PropTypes from 'prop-types'
import NoImage from './images/no_image.jpg'

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: false,
            imageUrl: ''
        }
    }

    render() {
        if (this.props.display) {
            return (
                <div className='Modal-container'>
                    Hello World
                    {console.log(this.props.display)}
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default Modal;