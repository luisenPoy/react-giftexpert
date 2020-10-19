import { getGifts } from '../helpers/getGifs';

const { useState, useEffect } = require('react');

export const useFetchGifts = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifts(category).then((imgs) => {
            setstate({
                data: imgs,
                loading: false,
            });
        });
    }, [category]);

    return state; // {data: [], loading: true}
};