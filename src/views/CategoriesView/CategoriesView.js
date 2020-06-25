import React from 'react';
import AppContext from '../../context';

const CategoriesView = () => {
     const { Consumer } = AppContext;

     return (
         <Consumer>
             {(context) => (
               <p>This is Categories View i {context.name}</p>
             )}
        </Consumer>
     )
};

export default CategoriesView;