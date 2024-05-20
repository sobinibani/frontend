import axios from 'axios'
import React, { useState, useEffect} from 'react'

const Gallery = () => {
    const [search,setSearch] = useState();
    const [photos, setPhotos] = useState([]);

    const fetchPhotos = async(search) => {
        const accesskey = `Fw-x4MMi8UWvIh2dbHRhsExAA3aeQzu_ohFxks-36NU`;
        const url = `http://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${accesskey}`

        try{
            const response = await axios.get(url);
            setPhotos(response.data.results);
        } catch(error){
            console.log(error);
            setPhotos([]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPhotos(search)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
            type='text'
            placeholder='검색어를 입력하세요.'
            value={search}
            onChange={(e) => {setSearch(e.target.value)}}
        />
        <button
            type='submit'
            className='btn'
        >검색</button>
      </form>

      <div className='photo-wrap'>
        {photos.map(photo =>(
            <img
                src={photo.urls.small}
                alt={photo.alt_description}
            />
        ))}
      </div>
    </div>
  )
}

export default Gallery
