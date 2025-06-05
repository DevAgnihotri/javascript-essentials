import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

//     articles = {
//   "status": "ok",
//   "totalResults": 2,
//   "articles": [
//     {
//       "source": {
//         "id": "espn-cric-info",
//         "name": "ESPN Cric Info"
//       },
//       "author": null,
//       "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//       "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//       "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//       "publishedAt": "2020-04-27T11:41:47Z",
//       "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//     },
//     {
//       "source": {
//         "id": "espn-cric-info",
//         "name": "ESPN Cric Info"
//       },
//       "author": null,
//       "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//       "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//       "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//       "publishedAt": "2020-03-30T15:26:05Z",
//       "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//     }
//   ]
// };
    constructor () {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1
        }
    }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f9be7e046f7b47f0aa0b639157b646a0&page=1&pageSize=20"
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }
  
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f9be7e046f7b47f0aa0b639157b646a0&page=${this.state.page - 1}&pageSize=20`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
      })
  }

  handleNextClick = async () => {

    if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)) 
    {
      // Do nothing - prevent navigation beyond last page
    }
    else {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f9be7e046f7b47f0aa0b639157b646a0&page=${this.state.page + 1}&pageSize=20`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
      })
  }}
  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        <div className="row">
            {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,25):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3cyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"} newsUrl={element.url}/>
            </div>
            })}
        </div>
        <div className="container d-flex justify-content-around">
          <button disabled={this.state.page<1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}> &larr; Prev</button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalResults/20)} type='button' className='btn btn-warning' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
