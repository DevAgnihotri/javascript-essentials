import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner'
export class News extends Component {
   
      static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'entertainment'
  };
  
  static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
    };
    
    capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
      constructor (props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            hasMoreData: true
        }

        document.title= `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`
    }

  async componentDidMount() {
    this.fetchMoreData()
  }  
  
  
  fetchMoreData = async () => {
    this.props.setProgress && this.props.setProgress(10);
    this.setState({page: this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress && this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress && this.props.setProgress(75);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
       totalResults: parsedData.totalResults,
      loading: false,
      hasMoreData: parsedData.articles.length > 0
    })

    this.props.setProgress && this.props.setProgress(100)
  };
  
  render() {
    return (
      <>
        <h1  className='text-center' style={{margin: "40px 0px"}}>Top Headlines from {this.capitalizeFirstLetter(this.props.category)} category</h1>        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMoreData}
          loader={ <Spinner/> }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className='container my-3'>
          <div className="row">
            {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,25):""} description={element.description?element.description.slice(0,88):""} time={element.publishedAt?element.publishedAt:"Not mentioned"} author={element.author?element.author:""} imageUrl={element.urlToImage?element.urlToImage:"https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3cyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"} newsUrl={element.url}/>
            </div>
            })}
          </div></div>
        </InfiniteScroll>
      </>
    )
  }
}

export default News
