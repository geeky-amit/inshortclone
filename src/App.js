import {useEffect, useState} from 'react';
import Appbar from './componant/Appbar';
import NewsContent from './newsContent/NewsContent';
import axios from 'axios';
import apiKey from './data/config';
import Footer from './componant/footer/Footer';
import './App.css'

function App() {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()
  const [loadmore, setLoadmore] = useState(20)

 

 
  const newsApi = async () => {
    try {
          //const proxyUrl = "https://cors-anywhere.herokuapp.com/";

          const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadmore}`);
          
          setNewsArray(news.data.articles);
          
          setNewsResults(news.data.totalResults);
          
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
      newsApi();
      // eslint-disable-next-line 
  },[newsResults, category, loadmore])

  return (
    <div>
      <Appbar setCategory={setCategory} />

      <NewsContent
      setLoadmore={setLoadmore}
      loadmore={loadmore}
      newsArray={newsArray}
      newsResults={newsResults} 
      />
      <Footer />
    </div>
  );
}

export default App;
