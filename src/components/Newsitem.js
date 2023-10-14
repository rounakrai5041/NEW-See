import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,publishedAt,author,source} = this.props;
    return (
      
      <div className='my-3'>
        
        <div className="card" >
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"91%", zIndex:"1"}}>
    {source}
  </span>
          <img src= {!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl}className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}.</p>
            <p class="card-text"><small className="text-muted " >By {!author?"unknown":author} on {new Date (publishedAt).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem