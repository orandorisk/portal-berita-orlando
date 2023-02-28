import React from 'react'

const News = ({data}) => {
  if(!data?.length) return <h2>Loader</h2>
  return (
    <div>
      {
        data.map((item, index) => 
          <h2>{item.title}</h2>
        )
      }
    </div>
  )
}

export default News;