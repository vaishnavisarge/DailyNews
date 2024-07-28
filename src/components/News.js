import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types';
export class News extends Component {
 static defaultProps={
    country:'in',
    category:'general'
 }
 static propTypes={
  country:PropTypes.string,
  category:PropTypes.string,
}
async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=66c7de1f386145d5a3bc2b8c7a1916bd&page=1pageSize=20`;
  let data=await fetch(url);
  let parsedData=await data.json()
  console.log(parsedData);
  this.setState({articles: parsedData.articles})

}
  constructor(){ 
    super();
    this.state={
      articles: [],
      loading:false,
      page:1

      
    }
  }



  handlePrevClick= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=&apiKey=66c7de1f386145d5a3bc2b8c7a1916bd&page
    =${this.state.page-1}&pageSize=20`;
    let data=await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})

    this.setState({
      page:this.state.page-1,
      articles: parsedData.articles
    })
  }
   handleNextClick=async()=>{
    if(this.state.page+1 >Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey==66c7de1f386145d5a3bc2b8c7a1916bd&page=
    ${this.state.page+1}&pageSize=20`;
    let data=await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({})

    this.setState({
      page:this.state.page+1,
      articles: parsedData.articles
    })
    }
    
  }

  render() {
    return (
  
      <div className="container my-4">
        <h2>DailyNews- Top Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4">
          <NewsItem  title={element.title} description={element.description
          } 
          imageUrl= {element.urlToImage} newsUrl={element.url}
          />
        </div>
        })}
        </div>
        <div class="d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News
