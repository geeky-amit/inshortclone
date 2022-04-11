import React from 'react'
import Container from '@mui/material/Container';
import './NewsContent.css'
import NewsCard from '../componant/NewsCard/NewsCard';


const NewsContent = ({newsArray, newsResults, loadmore, setLoadmore}) => {
    console.log(newsArray);
    
  return (
    <Container maxWidth="md"> 
        <div className="content">
            <div className="downloadMessage">
                <span className="downloadText">For the best experience use inshorts app on your smartphone</span>
                <img
                alt="app store"
                height="80%" 
                 src="https://assets.inshorts.com/website_assets/images/appstore.png" />

                <img
                alt="play store"
                height="80%"
                src="https://assets.inshorts.com/website_assets/images/playstore.png" />
            </div>

            {newsArray.map((newsItem) => (
                <NewsCard newsItem={newsItem} key={newsItem.title} />
            ))}

            {
                loadmore <= newsResults && (
                    <>
                        <hr/>
            <button className="loadmore" onClick={() => setLoadmore(loadmore + 20)}>
                Load More
            </button>
                    </>
                )
            }

            
           
        </div>
           
    </Container>
  );
};

export default NewsContent