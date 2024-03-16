import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function DetailNew() {
    const { id } = useParams();
    const [section, setSection] = useState(null);
    useEffect(() => {
        axios.get(`https://6532787ed80bd20280f59739.mockapi.io/sectionManagement/${id}`)
            .then(response => setSection(response.data))
            .catch(error => console.log(error));
    }, [id]);
    if (!section) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>{section.sectionName}</h1>
            <p>Description : {section.sectionDescription}</p>
            <p>Duration : {section.duration}</p>
            <img src={section.image} alt={section.sectionName} />
            <p>isMainTask : {String(section.isMainTask)}</p>
        </div>
    );
}
