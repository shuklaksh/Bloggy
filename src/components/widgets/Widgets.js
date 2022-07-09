import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Widgets() {

    const newsArticle = (heading,subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h2>{heading}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    ) 
    
  return (
    <div className='widgets'>
        <div className="widgets__top">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('IISc beats IIT in world ranking','1d ago~11,871 readers')}
            {newsArticle('CV mistakes to avoid','4d ago~6,321 readers')}
            {newsArticle('RBI hikes repo rate','6d ago~4,465 readers')}
            {newsArticle('Trending technologies in demand','2d ago~2,471 readers')}
            {newsArticle('How Indians unicorn are hiring','2d ago~1,823 readers')}
            {newsArticle('Tip for Placement Season','8d ago~975 readers')}
        </div>
        <div className="widgets__footer">
            <img src='https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png'/>
            <div className="widgets__footerFoot">
                <LinkedInIcon /> 
                <span>LinkedIn Corporation © 2022</span>
            </div>
            
        </div>    

    </div>
  )
}

export default Widgets
