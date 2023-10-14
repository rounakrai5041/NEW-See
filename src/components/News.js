import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'

export class News extends Component {

  static defaultProps={
    country: "in",
    pageSize: 6
  }



  constructor() {
    super()
    console.log("main hu yha ")
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }


  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e050cbccfb6348ab9ccddf2109ea6ee0&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  }

  handlePrevClick = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e050cbccfb6348ab9ccddf2109ea6ee0&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false

    })



  }

  handleNextClick = async () => {


    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e050cbccfb6348ab9ccddf2109ea6ee0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })

  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:"30px"}}>NEWSee  Top headlines</h1>
       
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {

            return (<div className='col-md-4' key={element.url}>
              <Newsitem description={element.description?.slice(0, 55)} title={element.title.slice(0, 45)} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name}/>
            </div>)

          })}


        </div>
        <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; prev </button>
          <button type="button" disabled={this.state.page >= 6} className="btn btn-dark" onClick={this.handleNextClick}>next &rarr;</button>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {this.state.loading && <Spinner />}

      </div>
    )
  }
}

export default News