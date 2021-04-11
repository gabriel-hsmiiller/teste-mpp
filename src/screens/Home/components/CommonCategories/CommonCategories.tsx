import React, { Requireable } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@material-ui/core/';

import CardCategory from '../CardCategory/CardCategory';

import './CommonCategoriesStyle.scss';

interface ICommonCategoriesProps {
    categories: { label: string, icon: string }[];
}

interface ICommonCategoriesState {}

export default class CommonCategories extends React.Component<ICommonCategoriesProps, ICommonCategoriesState> {
    static propTypes: {
        categories: Requireable<any[]>,
    };
    
    render() {
        const { categories } = this.props;

        return (
            <div className="common-categories">
                { categories.map(
                    (category, index) => <CardCategory content={category} key={index} />
                )}
            </div>
        );
    } 
}

CommonCategories.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.exact({ 
            icon: PropTypes.string, 
            label: PropTypes.string,
        })
    )
}
