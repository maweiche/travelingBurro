import { getArticles } from '@polyblog/polyblog-js-client';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const HomePage = () => {
    const [articles, setArticles] = useState();
    const { locale } = useParams();

    useEffect (() => {
        if (articles) return
        const fetchArticles = async () => {
            let articles = await getArticles({
                blogId: 'YOUR_BLOG_ID',
                locale,
                published: true,
                sortDirection: 'DESC',
            })
            console.log({ articles })
            setArticles(articles)
        }
        fetchArticles()
    }, [articles, locale])
    return (
        <div>
            <div>
            <h1 style={{textAlign: 'center'}}>Recent Articles</h1>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
          {articles?.map(article => (
            article.locale === locale && 
            <Link
              style={{width: '28%', marginBottom: '2rem', border: '1px solid gray'}}
              to={{ pathname: `/${article.locale}/${article.slugLocalized}`}}
              key={article._id}
            >
              <div>
                <div>
                  <img src={article?.coverUrl} alt={article.title} style={{width: '100%', height: '200px'}} />
                </div>
                <div>
                  <span>{article.author} </span>
                  <span>
                  {
                    new Date(article.creationTime).toLocaleString(article.locale, {
                    dateStyle: 'long' })
                  }
                 </span>
                 <h3>{article.title}</h3>
                 <p>{article.subtitle}</p>
                </div>
              </div>
            </Link> 
          ))}
        </div>
            </div>
        </div>
    )
}

export default HomePage