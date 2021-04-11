import React from 'react';
import { Icon } from '@material-ui/core';
import {ReactComponent as Logo} from '../../assets/to_vendendo.svg';
import './HeadbarStyle.scss';

interface IHeadbarProps {
}

interface IHeadbarState {
}

class Headbar extends React.Component<IHeadbarProps, IHeadbarState> {
    static propTypes: { };

    render() {
        if(window.innerWidth < 570){
            return (
                <div className="mHeader">
                    <div className="logo"><Logo style={{ height: 40, width: 60 }} /></div>
                    <div className="menu"><Icon>menu</Icon></div>
                </div>
            );
        } else {
            return(
                <div className="header">
                    <div className="logo">
                        <Logo style={{ height: 80, width: 100 }} />
                        <span style={{ color: 'white' }}>Tô Vendendo</span>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Pesquisar" />
                    </div>
                    <div className="profile">
                        <div className="">Anuncie</div>
                        <div className=""><Icon>person</Icon></div>
                        <div className=""><Icon>shopping_cart</Icon></div>
                    </div>
                </div>
            );
        }
    } 
}

Headbar.propTypes = {};

export default Headbar;