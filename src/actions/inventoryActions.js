import { ADD_INVENTORY_ITEM, REMOVE_INVENTORY_ITEM } from './types';

// Action creators
export const addInventoryItem = (item) => {
  return {
    type: ADD_INVENTORY_ITEM,
    payload: item,
  };
};

export const removeInventoryItem = (itemId) => {
  return {
    type: REMOVE_INVENTORY_ITEM,
    payload: itemId,
  };
};


