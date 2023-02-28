import React, { useEffect, useState} from "react";
import { ApiFetch } from "../utils/ApiFetch";

import Navbar from './Navbar';
import News from './News';

const Home = () => {
    const [ category, setCategory ] = useState("cnn-news");
    const [ data, setData ] = useState(null);

    // useEffect(() => {
    //     const getData = async () => {
    //         const { data } = await ApiFetch(`${category}`);
    //         setData(data);
    //     }
    //     getData();
    // }, [category]);

    useEffect(() => {
        ApiFetch(`${category}`)
        .then((data) => setData(data.data))
    }, [category])

    return (
        <React.Fragment>
            <Navbar setCategory={setCategory} category={category}/>
            <News data={data} />
        </React.Fragment>
        
    )
            
}
export default Home;
