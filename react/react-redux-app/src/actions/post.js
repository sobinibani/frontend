import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export const fetchPosts= () => 
    async function fetchPostsThunk(dispatch, getState){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // console.log(response.data);
        dispatch({type: 'FETCH_POSTS', payload: response.data})
    }

