import React from 'react'

const News = ({data}) => {
  if(!data?.length) return <h2>Loader</h2>
  console.log(data);
  return (
    <div>
      {
        data.map((item, index) => 
        <div>
          <h2>{item.title}</h2>
          <a href={item.link}>{item.title}</a>
          <img src={item.image.small} alt={item.image}></img>
        </div>
        )
      }
    </div>
  )
}

export default News;