import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('https://5000-bc3f1b50-c9c0-4927-99d2-ae671c87a1dd.ws-ap0.gitpod.io/api/items')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    );
};


export const addItem = item => dispatch => {
    axios
        .post('https://5000-bc3f1b50-c9c0-4927-99d2-ae671c87a1dd.ws-ap0.gitpod.io/api/items', item)
            .then(res =>
                dispatch({
                    type: ADD_ITEM,
                    payload: res.data
                })
            )

}

export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
}


export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}