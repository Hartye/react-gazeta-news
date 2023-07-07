import React from 'react';
import '../styles/menu.scss'

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.menu == true ? 'Menu-container off' : 'Menu-container on'}>
                <nav>
                    <ul>
                        <a href="https://github.com/hartye" target='_blank' rel='noreferrer'><li className='Menu-item-github'>Github</li></a>
                        <a href="https://www.linkedin.com/in/carlos-santos-274a55219/" target='_blank' rel='noreferrer'><li className='Menu-item-linkedin'>Linkedin</li></a>
                        <a href="mailto:danielrochasilva211@gmail.com" target='_blank' rel='noreferrer'><li className='Menu-item-mail'>Mail</li></a>
                        <a href="https://github.com/Hartye/react-gazeta-news" target='_blank' rel='noreferrer'><li className='Menu-item-repository'>Repository</li></a>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Menu;