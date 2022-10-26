import React, { useEffect, useState } from 'react';
function Films({toggle, handleToggle, display}) {
    const [titles, settitles] = useState([])
    const handleFilm = (e)=>{
        console.log(e.target.innerText)
    }
    useEffect(() => {
      let titles = JSON.parse(localStorage.getItem('films')||"").results;
      settitles(titles)
     
    }, [])
    
    return ( 
        <div className={`films ${toggle}`}>
           <div style={{display:display.film}} className="titles">
            <div className="clear" onClick={handleToggle}>
                <div className="clear-icon">
                    <img src="/assets/images/png/delete.png" alt="clear icon" className="clear-img" />
                </div>
            </div>
            {titles.map((a:string,b:number)=>{
                return <div onClick={handleFilm} className='title' key = {b}> {a.title} </div>
            })}
           </div>
        </div>
     );
}

export default Films;