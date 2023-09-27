// src/reducers/inventoryReducer.js
import { ADD_INVENTORY_ITEM, REMOVE_INVENTORY_ITEM } from '../actions/types';

const initialState = {
  inventory: [],
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVENTORY_ITEM:
      return {
        ...state,
        inventory: [...state.inventory, action.payload],
      };
    case REMOVE_INVENTORY_ITEM:
      return {
        ...state,
        inventory: state.inventory.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default inventoryReducer;

