import React, {
  createContext,
  useReducer,
  useState,
  useContext,
  useEffect,
} from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

const cartReducer = (state, action) => {
  // set initial cart from local storage
  if (action.type === 'INITIAL') {
    return action.initialCart;
  }

  if (action.type === 'ADD') {
    // set new price & quantity on add
    const newTotalQuantities = state.totalQuantities + action.item.amount;
    const newTatalPrice =
      state.totalPrice + +action.item.price * action.item.amount;

    // check if added item is already exist
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];

    // var to hold new items value
    let updatingItems;
    if (existingItem) {
      // if item which added is already exisit only increase amount
      const updatingItem = { ...existingItem, amount: existingItem.amount + 1 };
      // copy already items in state to the new var
      updatingItems = [...state.items];
      // modify items with the new value of amount of existing item
      updatingItems[existingItemIndex] = updatingItem;
    } else {
      // if item which added not exisit so added to items list
      updatingItems = state.items.concat(action.item);
    }

    toast.success(`${action.item.title} added to cart.`);

    // save updating cart to local storage
    localStorage.setItem(
      'cartInital',
      JSON.stringify({
        items: updatingItems,
        totalQuantities: newTotalQuantities,
        totalPrice: newTatalPrice,
      })
    );

    return {
      items: updatingItems,
      totalQuantities: newTotalQuantities,
      totalPrice: newTatalPrice,
    };
  }
  if (action.type === 'REMOVE') {
    // check the item we need to remove already exisit
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];

    // modify new price & quantity of cart when we remove
    const newTotalQuantities = state.totalQuantities - 1;
    const newTatalPrice = state.totalPrice - +existingItem.price;

    // var to hold new items value
    let updatingItems;
    if (existingItem.amount === 1) {
      // if the item which remove have one quantity so we removed from cart
      updatingItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // if the item which remove have more than one quantity so we decrease amount
      const updatingItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatingItems = [...state.items];
      updatingItems[existingItemIndex] = updatingItem;
    }
    toast.error(`${existingItem.title} remove from cart.`);

    // save updating cart to local storage
    localStorage.setItem(
      'cartInital',
      JSON.stringify({
        items: updatingItems,
        totalQuantities: newTotalQuantities,
        totalPrice: newTatalPrice,
      })
    );

    return {
      items: updatingItems,
      totalQuantities: newTotalQuantities,
      totalPrice: newTatalPrice,
    };
  }
  if (action.type === 'CLEAR') {
    // clear entaier cart from local storage
    localStorage.setItem(
      'cartInital',
      JSON.stringify({
        items: [],
        totalQuantities: 0,
        totalPrice: 0,
      })
    );
    return {
      items: [],
      totalQuantities: 0,
      totalPrice: 0,
    };
  }
  return {
    items: [],
    totalQuantities: 0,
    totalPrice: 0,
  };
};

export const CartContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalQuantities: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    // check if there is cart data in local storage and set it to initial cart value
    dispatchCart({
      type: 'INITIAL',
      initialCart: JSON.parse(localStorage.getItem('cartInital')) || {
        items: [],
        totalQuantities: 0,
        totalPrice: 0,
      },
    });
  }, []);

  const AddItemToCart = (item) => {
    dispatchCart({ type: 'ADD', item: item });
  };

  const DeleteItemFromCart = (id) => {
    dispatchCart({ type: 'REMOVE', id: id });
  };

  const ClearCart = () => {
    dispatchCart({ type: 'CLEARCART' });
    toast.error(`clear all cart items.`);
  };

  const cartCtx = {
    showCart,
    setShowCart,
    items: cartState.items,
    totalAmount: cartState.totalQuantities,
    totalPrice: cartState.totalPrice,
    addItem: AddItemToCart,
    removeItem: DeleteItemFromCart,
    clearCart: ClearCart,
  };
  return <Context.Provider value={cartCtx}>{children}</Context.Provider>;
};

export default CartContext;

export const useCartContext = () => useContext(Context);
