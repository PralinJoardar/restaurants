import cuisine from '../../data/cuisines.json';
import {FETCH_CUISINE_LIST} from '../constants'
const cuisineList = cuisine[0].data;
export const cuisineListAction=()=>{
    return{
        type: FETCH_CUISINE_LIST,
        payload: cuisineList
    }
}