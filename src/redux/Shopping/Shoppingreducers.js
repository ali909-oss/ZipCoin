import * as actionTypes from "./Shoppingtypes";

const INITIAL_STATE = {
    products: [
      {
        user_name: 'Shoes',
        id: '1',
        user_image: require('../../assets/images/dow.jpg'),
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart",
        price:'$50'

    },
    {
        user_name: 'Jackets',
        id: '2',
        user_image: require('../../assets/images/dow.jpg'),
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart",
        price:'$50'

    },
    {
        user_name: 'T-Shirt',
        id: '3',
        user_image: require('../../assets/images/dow.jpg'),
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart",
        price:'$50'

    },
    {
        user_name: 'Shirts',
        id: '4',
        user_image: require('../../assets/images/dow.jpg'),
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart",
        price:'$50'

    }

    ],
    cart: [],
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
        // Great Item data from products array
        const item = state.products.find(
          (product) => product.id === action.payload.id
        );
        // Check if Item is in cart already
        const inCart = state.cart.find((item) =>
          item.id === action.payload.id ? true : false
        );
  
        return {
          ...state,
          cart: inCart
            ? state.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              )
            : [...state.cart, { ...item, qty: 1 }],
        };
      case actionTypes.REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      case actionTypes.ADJUST_ITEM_QTY:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: +action.payload.qty }
              : item
          ),
        };
      case actionTypes.LOAD_CURRENT_ITEM:
        return {
          ...state,
          currentItem: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default shopReducer;