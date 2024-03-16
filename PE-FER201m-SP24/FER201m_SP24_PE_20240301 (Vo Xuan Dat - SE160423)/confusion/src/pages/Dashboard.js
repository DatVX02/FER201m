import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/dashboard.css';

const URL = 'https://6532787ed80bd20280f59739.mockapi.io/sectionManagement';

const Dashboard = () => {

    const [data, setData] = useState([]);

    const getListData = async () => {
        const res = await axios.get(`${URL}`);
        if (res.status === 200) {
            setData(res.data);
        }
    }

    useEffect(() => {
        getListData();
    }, []);



    return (
        <div className="staff-table">
            <div className="btn-add">

                <button className='add-staff-btn'>ADD</button>

            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>SectionName</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Image</th>
                        <th>isMainTask</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((section) => (
                        <tr key={section.id}>
                            <td><p>{section.id}</p></td>
                            <td><p>{section.sectionName}</p></td>
                            <td><p>{section.sectionDescription}</p>
                            </td>
                            <td><p>{section.duration}</p></td>
                            <td><img src={section.image} alt={section.id} width="300" height="300" /></td>
                            <td><p>{String(section.isMainTask)}</p></td>



                            <td>
                                <button>Edit</button>

                            </td>
                            <td>

                                <button >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;