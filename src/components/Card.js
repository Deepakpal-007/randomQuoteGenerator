import {useState,useEffect} from 'react'
import React from "react";
import "./styles.css"

export default function Card(props) {
    const [quote, setQuote] = useState("...Loading")
    const [author, setAuthor] = useState("...Loading")
    useEffect(() => {
      return () => {
        getQuote()
      };
    }, [])

   
    const getQuote = async()=>{
      const apiUrl= "https://api.quotable.io/random"
        const response = await fetch(apiUrl)
        const data = await response.json()
        setQuote(data.content)
        setAuthor(data.author)
    }
    
    



    return (
       <div className="quote-box" id="quote-box" >
        <h2>Quote of the Day</h2>
        <blockquote id="text">{quote}</blockquote>
        <span id="author">{author}</span>
        <div>
            <button id="new-quote" onClick={()=>getQuote()}>New Quote</button>
            <button><i class="fa-brands fa-twitter"></i><a href={`https://twitter.com/intent/tweet?text=${quote}  --by ${author}`} id="tweet-quote" target='_blank' rel='noreferrer' >Tweet</a></button>
        </div>
       </div>
    );
}
