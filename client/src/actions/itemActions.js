import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('https://5000-ab8daa5a-00c3-4245-9b3f-d3b9ef1f880d.ws-ap0.gitpod.io/api/items')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    );
};


export const addItem = item => dispatch => {
    console.log(item);
    axios
        .post('https://5000-ab8daa5a-00c3-4245-9b3f-d3b9ef1f880d.ws-ap0.gitpod.io/api/items', item)
            .then(res =>
                dispatch({
                    type: ADD_ITEM,
                    payload: res.data
                })
            )

}

export const deleteItem = id => dispatch => {
    axios.delete(`https://5000-ab8daa5a-00c3-4245-9b3f-d3b9ef1f880d.ws-ap0.gitpod.io/api/items/${id}`).then(res =>
        dispatch({
            type: DELETE_ITEM,
            payload: res.data
        })
    )
}


export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}