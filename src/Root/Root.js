import React from 'react';
import './index.css';
import ListWrapper from '../components/ListWrapper/ListWrapper';
import  productsList from '../data/productsList';
import Form from '../components/Form/Form';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons';

// const productsList = [{
//     'fruits and vegetables': {
//         icon: faPepperHot,
//         unit: 'kg',
//         products: [{
//                 name: 'banana',
//                 amount: 1,
//             },
//             {
//                 name: 'apple',
//                 amount: 2,
//             },
//             {
//                 name: 'orange',
//                 amount: 1,
//             },
//             {
//                 name: 'papric',
//                 amount: 2,
//             },
//             {
//                 name: 'carrot',
//                 amount: 3
//             },
//             {
//                 name: 'tomatoes',
//                 amount: 0.5
//             }
//         ],
//     },
//     'meat and fish': {
//         icon: faDrumstickBite,
//         unit: 'kg',
//         products: [{
//                 name: 'chicken breast',
//                 amount: 1,
//             },
//             {
//                 name: 'beaf',
//                 amount: 2,
//             },
//             {
//                 name: 'salmon',
//                 amount: 1,
//             },
//             {
//                 name: 'tuna',
//                 amount: 2,
//             },
//             {
//                 name: 'turkey breast',
//                 amount: 3
//             },
//         ],
//     },
//     'flour, pasta and groats': {
//         icon: faBoxes,
//         unit: 'package',
//         products: [{
//                 name: 'coconut floor',
//                 amount: 1,
//             },
//             {
//                 name: 'chestnuts flour',
//                 amount: 1,
//             },
//             {
//                 name: 'rice',
//                 amount: 1,
//             },
//             {
//                 name: 'rice noodles',
//                 amount: 2,
//             },
//             {
//                 name: 'millet',
//                 amount: 0.5
//             },
//         ],
//     },
//     'beverages / drink': {
//         icon: faWineBottle,
//         unit: 'l',
//         products: [{
//                 name: 'coconut drink',
//                 amount: 1,
//             },
//             {
//                 name: 'rice drink',
//                 amount: 1,
//             },
//             {
//                 name: 'coconut cream',
//                 amount: 1,
//             },
//         ],
//     },
//     'oil': {
//         icon: faOilCan,
//         unit: 'l',
//         products: [{
//                 name: 'coconut oil',
//                 amount: 0.5,
//             },
//             {
//                 name: 'olive',
//                 amount: 1,
//             },
//             {
//                 name: 'butter',
//                 amount: 0.5,
//             },
//         ],
//     },
//     'nuts': {
//         icon: faSeedling,
//         unit: 'package',
//         products: [{
//                 name: 'almounts',
//                 amount: 0.5,
//             },
//             {
//                 name: 'walnuts',
//                 amount: 1,
//             },
//             {
//                 name: 'sunflower seeds',
//                 amount: 0.5,
//             },
//         ],
//     },
//     'other': {
//         icon: faEgg,
//         unit: 'package',
//         products: [{
//                 name: 'eggs',
//                 amount: 0.5,
//             },
//             {
//                 name: 'erytrol',
//                 amount: 1,
//             },
//         ],
//     }
// }];

class Root extends React.Component {
    state = {
        items: [...productsList]
    }

    addItem = (e) => {
        e.preventDefault();

        this.state.items.map(item => (
            
            console.log('test', item.category.indexOf(e.target[0].value) )
        
                // if (item.category.indexOf(e.target[0].value)) {
                //     console.log('mam kategorie', item);
                // } else {
                //     console.log('bad');
                // }
                
        ))

        const newItem = {
            icon: faPepperHot,
            category: e.target[0].value,
            unit: 'kg',
            products: [{
                    name: e.target[1].value,
                    amount: e.target[2].value,
                },
            ],
        }

        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);


    this.setState(prevState => ({
        items: [...prevState.items, newItem]
    }));

    console.log('items', this.state.items);
        
    //     this.state.items.map(item => (
            
    //        console.log('test', item.category.indexOf(e.target[0].value) )

           
    //     ))
        
    //    if (this.state.items.category.indexOf(e.target[0].value) !== -1) {
    //        newItem = {
    //             products: {
    //                 name: e.target[1].value,
    //                 amount: e.target[2].value,
    //             }
    //         }
    //    } else {
    //        console.log('bad idea');
    //    }
       
        
    //     this.setState(prevState => ({
    //         items: [...prevState.items, newItem],
    //     }));
        
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


