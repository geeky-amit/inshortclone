import React from 'react'
import './NewsCard.css';

const NewsCard = ({newsItem}) => {
    //console.log(newsItem);

    const fullDate = new Date(newsItem.publishedAt);
    var date = fullDate.toString().split("");
    const hour = parseInt(date[4].substring(0,2));
    const time = hour > 12 ? true : false;

  return (
    <div className="newsCard">
        <img alt={newsItem.title} 
        src={newsItem.urlToImage?newsItem.urlToImage:"https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="}
        className="newsImage" />

        <div className="newsText">
            <div>
              <span className="title"> {newsItem.title} </span><br/>{" "}
              <span className="author">
                <a href={newsItem.url}>
                  <b>short</b>
                </a> 
                <span className="muted">
                {" "}
                  by {newsItem.author ? newsItem.author : "unknown"} /{" "}
                 {time
                  ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                  : `${hour}:${date[4].substring(3, 5)} am`}{" "}
                  on {date[2]} {date[1]} {date[3]}, {date[0]}
                </span>
              </span>
            </div>

            <div className="lowerNewsText">
                <div className="description">{newsItem.description}</div>
                <span className="readmore">read more at{" "} <a href={newsItem.url} target="__blank">
                    <b>{newsItem.source.name}</b>    
                    </a>
                  </span>
            </div>

        </div>

    </div>
  )
}

export default NewsCard