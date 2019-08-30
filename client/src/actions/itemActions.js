import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('https://5000-ca83c8c1-be45-4fa9-be26-b384cbbee9d5.ws-ap0.gitpod.io/api/items')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    );
};

export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
}

export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload: item
    };
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}