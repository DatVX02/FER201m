import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/home.css";
const URL = 'https://6532787ed80bd20280f59739.mockapi.io/sectionManagement';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetchData();

    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${URL}`);
            console.log(response.data);
            const filterData = [];
            // console.log(response.data.length);
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].isMainTask === true) {
                    filterData.push(response.data[i]);
                }// fillter actractive == trues
            }
            setData(filterData)
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>sectionName</th>
                    <th>Duration</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((d) => (
                    <tr key={d.id}>
                        <td>
                            <Link to={`/detail/${d.id}`}><p>{d.sectionName}</p></Link>
                        </td>
                        <td>{d.duration}</td>
                        <td><img src={d.image} alt={d.id} width="300" height="300" /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Home;