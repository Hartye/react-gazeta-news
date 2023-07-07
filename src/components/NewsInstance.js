import '../styles/buttons.scss'
import '../styles/instance-modal.scss'
import React from 'react';
import NoImage from '../images/no_image.jpg'

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: false,
            imageUrl: ''
        }
    }

    render() {
        const newsObj = this.props.news[this.props.instanceId];
        if (this.props.display) {
            if (this.props.instanceId !== '') {
                return (
                    <div className='Modal-container'>
                        <div className='Modal-instance'>
                            <img className='Modal-instance-image' src={newsObj.image != null ? newsObj.image : NoImage} alt="News Ilustration" />
                            <h1>{newsObj.title}</h1>
                            <div className="Modal-instance-info">
                                <span>{newsObj.publishedAt}</span>
                                <span>{newsObj.author}</span>
                            </div>
                            <p>{newsObj.content}</p>
                        </div>
                        <span className='Modal-button-area'>
                            <button onClick={this.props.closeModal} className='btn Modal-close-button'>X</button>
                            <a href={newsObj.url} target='_blank' rel="noreferrer">
                                <button className='btn Modal-to-website'>Go To Website</button>
                            </a>
                        </span>
                    </div>
                )
            } else {
                return <div></div>
            }
        } else {
            return <div></div>
        }
    }
}

export default Modal;