import { useParams } from 'react-router-dom';
import { Films } from '../shared/ListOfFilms';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './Films.css';
import './Detail.css';
export default function Detail() {
  const userName = useParams();
  const { theme } = useContext(ThemeContext)
  const Film = Films.find(obj => {
    return obj.id == userName.id;
  });
   return(
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <div className='image-detail'>
    		<img className='imageDetail' src={`../${Film.image}`} />
    	</div>
    	<div className='title-detail'>{Film.Title}</div>
    	<div className='film-details'>
        	<p><b>Year:</b> {Film.Year}</p>
      		<p><b>Nation:</b> {Film.Nation}</p>
      		<div className='film-description'><b>Info:</b> {Film.info}</div>
        </div>
   </div>
   )
}