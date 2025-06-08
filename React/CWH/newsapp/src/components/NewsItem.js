import React from 'react'

import {Link} from "react-router-dom";

const NewsItem = (props) => {
    let {title , description, imageUrl, newsUrl,author,time} = props;
    return (
      <div className="card my-3">
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
            {description}... </p>
           <p className='card-text'> <small className='text-muted mb-4'> By <b>{author}</b> At {new Date(time).toGMTString()} <br /></small></p>
          <Link to={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</Link>
        </div>
    </div>
    )
  }

export default NewsItem
