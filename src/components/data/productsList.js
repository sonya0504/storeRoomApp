import { faPepperHot } from '@fortawesome/free-solid-svg-icons';
import { faEgg } from '@fortawesome/free-solid-svg-icons';
import { faBoxes } from '@fortawesome/free-solid-svg-icons';
import { faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faOilCan } from '@fortawesome/free-solid-svg-icons';

const productsList = [{
        icon: faPepperHot,
        category: 'fruits and vegetables',
        unit: 'kg',
        products: [{
                name: 'banana',
                amount: 1,
            },
            {
                name: 'apple',
                amount: 2,
            },
            {
                name: 'orange',
                amount: 1,
            },
            {
                name: 'papric',
                amount: 2,
            },
            {
                name: 'carrot',
                amount: 3
            },
            {
                name: 'tomatoes',
                amount: 0.5
            },
        ],
    },
    {
        icon: faDrumstickBite,
        category: 'meat and fish',
        unit: 'kg',
        products: [{
                name: 'chicken breast',
                amount: 1,
            },
            {
                name: 'beaf',
                amount: 2,
            },
            {
                name: 'salmon',
                amount: 1,
            },
            {
                name: 'tuna',
                amount: 2,
            },
            {
                name: 'turkey breast',
                amount: 3
            },
        ],
    },
    {
        icon: faBoxes,
        category: 'flour, pasta and groats',
        unit: 'package',
        products: [{
                name: 'coconut floor',
                amount: 1,
            },
            {
                name: 'chestnuts flour',
                amount: 1,
            },
            {
                name: 'rice',
                amount: 1,
            },
            {
                name: 'rice noodles',
                amount: 2,
            },
            {
                name: 'millet',
                amount: 0.5
            },
        ],
    },
    {
        icon: faWineBottle,
        category: 'beverages / drink',
        unit: 'l',
        products: [{
                name: 'coconut drink',
                amount: 1,
            },
            {
                name: 'rice drink',
                amount: 1,
            },
            {
                name: 'coconut cream',
                amount: 1,
            },
        ],
    },
    {
        icon: faOilCan,
        category: 'oil',
        unit: 'l',
        products: [{
                name: 'coconut oil',
                amount: 0.5,
            },
            {
                name: 'olive',
                amount: 1,
            },
            {
                name: 'butter',
                amount: 0.5,
            },
        ],
    },
    {
        icon: faSeedling,
        category: 'nuts',
        unit: 'package',
        products: [{
                name: 'almounts',
                amount: 0.5,
            },
            {
                name: 'walnuts',
                amount: 1,
            },
            {
                name: 'sunflower seeds',
                amount: 0.5,
            },
        ],
    },
    {
        icon: faEgg,
        category: 'other',
        unit: 'package',
        products: [{
                name: 'eggs',
                amount: 0.5,
            },
            {
                name: 'erytrol',
                amount: 1,
            },
        ],
    },
];

export default productsList;