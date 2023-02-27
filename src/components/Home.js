import React, { useEffect, useState} from "react";
import { ApiFetch } from "../utils/ApiFetch";

const Home = () => {
    const [ data, setData ] = useState(null);
    const [ category, setCategory ] = useState('cnn-news');

    // useEffect(() => {
    //     const getData = async () => {
    //         const { data } = await ApiFetch(`${category}`);
    //         setData(data);
    //     }
    //     getData();
    // }, [category]);

    useEffect(() => {
        ApiFetch(`${category}`)
        .then(({data}) => setData(data))
    }, [category])

    return (
        <div>
            <h1>Home</h1>
            {
                console.log([data])
            }
        </div>
    )
            
}
export default Home;
