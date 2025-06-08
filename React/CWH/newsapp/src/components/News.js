import React, { useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner'

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMoreData, sethasMoreData] = useState(true);
          // document.title= `NewsMonkey - ${this.capitalizeFirstLetter(props.category)}`

  const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
  useEffect(() => {
    fetchMoreData()
    // eslint-disable-next-line
  }, []);
    const fetchMoreData = async () => {
    const nextPage = page + 1;
    setpage(nextPage);
    
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(75);
    
    if (parsedData.articles && parsedData.articles.length > 0) {
      setarticles(articles.concat(parsedData.articles));
      // If we got fewer articles than pageSize, we've reached the end
      sethasMoreData(parsedData.articles.length === props.pageSize);
    } else {
      // No articles returned, we've reached the end
      sethasMoreData(false);
    }

    props.setProgress(100)
  };
    return (
      <>
        <h1  className='text-center' style={{margin: "40px 0px"}}>Top Headlines from {capitalizeFirstLetter(props.category)} category</h1>        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={hasMoreData}
          loader={ <Spinner/> }          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>this is it.</b>
            </p>
          }
        >
          <div className='container my-3'>
          <div className="row">
            {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,25):""} description={element.description?element.description.slice(0,88):""} time={element.publishedAt?element.publishedAt:"Not mentioned"} author={element.author?element.author:""} imageUrl={element.urlToImage?element.urlToImage:"https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3cyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"} newsUrl={element.url}/>
            </div>
            })}
          </div></div>
        </InfiniteScroll>
      </>
    )
}

News.defaultProps = {
  country: 'us',
  pageSize: 8,
  category: 'entertainment'
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

export default News
