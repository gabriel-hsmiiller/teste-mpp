import React from 'react';
import { Icon } from '@material-ui/core';
import {ReactComponent as Logo} from '../../assets/to_vendendo.svg';
import './FooterStyle.scss';

interface IFooterProps {
}

interface IFooterState {
}

class Footer extends React.Component<IFooterProps, IFooterState> {
    static propTypes: { };

    render() {
        return(
            <div className="footer">
                <div className="topbar">
                    <div className="logo"><Logo style={{ height: 120, width: 160 }} /></div>
                    <div className="social">
                        <Icon className="fab fa-facebook" style={{ width: 40, fontSize: 32 }} />
                        <Icon className="fab fa-instagram" style={{ width: 40, fontSize: 32 }} />
                        <Icon className="fab fa-youtube" style={{ width: 40, fontSize: 32 }} />
                    </div>
                    <div className="links">
                        <div className="column">
                            <p>Termos e Condições</p>
                            <p>Políticas de Privacidade</p>
                        </div>
                        <div className="column">
                            <p>Sobre nós</p>
                            <p>Trabalhe Conosco</p>
                            <p>Suporte ao Usuário</p>
                        </div>
                    </div>
                </div>
                <div className="disclaimer">
                    <p>Tô Vendendo © 2021</p>
                </div>
            </div>
        );
    } 
}

Footer.propTypes = {};

export default Footer;