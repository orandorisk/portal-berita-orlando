import React from 'react';
import '../style/news.css';

function changeDate(tanggal) {
  return new Date(tanggal).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const News = ({data}) => {
  if(!data?.length) return <h2>Loader</h2>
  console.log(data);
  return (
    <div className='container-card'>
      {
        data.map((item, index) => 
        <div className='container-card_item'>
          <a href={item.link}>
            <img src={item.image.small} alt={item.image} className='image'></img>
          </a>
          <p>{changeDate(item.isoDate)}</p>
          <a href={item.link}>
            <h4>{item.title}</h4>
          </a>
        </div>
        )
      }
    </div>
  )
}

export default News;