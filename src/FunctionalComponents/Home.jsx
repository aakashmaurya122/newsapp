import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
export default function Home(props) {
    var [articles, setarticles] = useState([])
    var [totalResults, settotalresults] = useState(0)
    var [page, setpage] = useState(1)
    let getAPIData = async () => {
        var response = ""
        if (props.search)
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=1&pageSize=20&language=${props.language}&apiKey=8347de371cbd41abbd68cba80399b516`)
        else
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=1&pageSize=20&language=${props.language}&apiKey=8347de371cbd41abbd68cba80399b516`)
        var result = await response.json()
        setarticles(result.articles)
        settotalresults(result.totalResults)
    }
    let fetchMoreData = async () => {
        setpage(page+1)
        var response = ""
        if (props.search)
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=${page}&pageSize=20&language=${props.language}&apiKey=8347de371cbd41abbd68cba80399b516`)
        else
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=${page}&pageSize=20&language=${props.language}&apiKey=8347de371cbd41abbd68cba80399b516`)
        var result = await response.json()
        setarticles (articles.concat(result.articles))
    }
    useEffect(() => {
        getAPIData()
    }, [props])
    return (
        <>
            <div className="container-fluid mt-1">
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults}
                    loader={
                        <div className='my-5 text-center'>
                            <div class="spinner-grow text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-secondary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-success" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-danger" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-warning" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-info" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-dark" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                >
                    <div className="row">
                        <h5 className='bg-info text-center p-2'>{props.q} Releted News</h5>
                        
                        {
                            articles.map((item, index) => {
                                return <NewsItem
                                    key={index}
                                    pic={item.urlToImage}
                                    title={item.title}
                                    description={item.description}
                                    source={item.source.name}
                                    date={item.publishedAt}
                                    url={item.url}
                                />
                            })
                        }
                        
                    </div>
                </InfiniteScroll>
            </div >
        </>
    )
}