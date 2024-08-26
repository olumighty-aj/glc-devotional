import  { useState, useEffect } from 'react';
import devotionalData from '../sermons.json';
import './devotion.css';
import { Navbar } from './Navbar';
import loadingGif from '../assets/loading.gif';
import { Footer } from './Footer';
import ipray from '../assets/pastor.jpeg';

export const Devotional = () => {
    const [sermon, setSermon] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      const updateSermon = () => {
        const today = new Date().toISOString().split('T')[0];
        const todaysSermon = devotionalData[today];
        setSermon(todaysSermon);
      };
  
      setTimeout(() => {
        updateSermon();
        setLoading(false);
    }, 3000); // 3-second delay
      
  
      const interval = setInterval(() => {
        updateSermon();
      }, 1000 * 60 * 60 * 24); // Check daily
  
      return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <img src={loadingGif} alt="Loading..." className="loading-gif" />
            </div>
        );
    }
  
    if (!sermon) {
      return <div>Loading...</div>;
    }
  
  return (
    <>
        <Navbar />
         <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{sermon.title}</h1>
          <p className="card-text"><strong>Date:</strong> {sermon.date}</p>
          <p className="card-text"><strong>Bible Verse:</strong> {sermon.verse}</p>
          <p className="card-text">{sermon.content}</p>
          {sermon.content2 && <p className="card-text">{sermon.content2}</p>}
          <p className="card-text"><strong>Prayer Point:</strong> {sermon.prayerPoint}</p>
        </div>
      </div>

      <div className='iplug'>
      
      <h3>Join Us To Pray</h3>
      <img src={ipray} alt="Your Logo" className='pastor' />  
      </div>
    </div>
    <Footer />
    </>
   
  )
}
