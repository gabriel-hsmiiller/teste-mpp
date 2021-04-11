import React, { Requireable } from 'react';
import PropTypes from 'prop-types';
import './CardCategoryStyle.scss';
import { Icon } from '@material-ui/core/';

interface ICardCategoryProps {
    content: { label: string, icon: string };
}

interface ICardCategoryState {}

export default class CardCategory extends React.Component<ICardCategoryProps, ICardCategoryState> {
    static propTypes: {
        content: Requireable<any>,
    };
    
    render() {
        const { content } = this.props;

        return (
            <div className="card">
                <div className="icon"><Icon style={{ fontSize: 32 }}>{ content.icon }</Icon></div>
                <div className="label"><p>{ content.label }</p></div>
            </div>
        );
    } 
}

CardCategory.propTypes = {
    content: PropTypes.exact({ 
        label: PropTypes.string, 
        icon: PropTypes.any,
    }),
}
