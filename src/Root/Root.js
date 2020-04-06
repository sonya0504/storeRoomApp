import React from 'react';
import './index.css';
import ListWrapper from '../components/ListWrapper/ListWrapper';
import  productsList from '../components/data/productsList';
import Form from '../components/Form/Form';

class Root extends React.Component {
    state = {
        items: [...productsList]
    }

    addItem = (e) => {
        e.preventDefault();
        console.log('items', this.state.items);

        let newItem

        this.state.items.map(item => (
            
           console.log('test', item.category.indexOf(e.target[0].value) )

           
        ))
        
       if (this.state.items.category.indexOf(e.target[0].value) !== -1) {
           newItem = {
                products: {
                    name: e.target[1].value,
                    amount: e.target[2].value,
                }
            }
       } else {
           console.log('bad idea');
       }
       
        
        this.setState(prevState => ({
            items: [...prevState.items, newItem],
        }));
        
        e.target.reset();
    }

    render() {
        return (
            <>
                <h1>StoreRoomApp</h1>
                <ListWrapper items={this.state.items} />
                <Form submitFn={this.addItem} items={this.state.items} />
            </>
        )
    }
}

export default Root;


