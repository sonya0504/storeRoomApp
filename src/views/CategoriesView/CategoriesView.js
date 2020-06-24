import React from 'react';
import AppContext from '../../context';

const CategoriesView = () => (
    <AppContext.Consumer>
        {(context) => (
             <p>This is Categories View {context}</p>
        )}
    </AppContext.Consumer>
);

export default CategoriesView;