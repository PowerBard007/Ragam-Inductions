const data = 
{
    daily: 
    {
      work:{ current:"5hrs", previous:"Last Day - 7hrs"},
      play:{ current:"1hr", previous:"Last Day - 2hrs"},
      study:{ current:"0hrs", previous:"Last Day - 1hr"},
      exercise:{ current:"1hr", previous:"Last Day - 1hr"},
      social:{ current:"1hr", previous:"Last Day - 3hrs"},
      selfcare:{ current:"0hrs", previous:"Last Day - 1hr"},
    },

    weekly: 
    {
        work:{current:"32hrs", previous:"Last Week - 36hrs"},
        play:{current:"10hrs", previous:"Last Week - 8hrs"},
        study:{current:"4hrs", previous:"Last Week - 7hrs"},
        exercise:{current:"4hrs", previous:"Last Week - 5hrs"},
        social:{current:"5hrs", previous:"Last Week - 10hrs"},
        selfcare:{current:"2hrs", previous:"Last Week - 2hrs"},
     },

    monthly: 
    {
      work:{current:"103hrs", previous:"Last Month - 128hrs"},
      play:{current:"23hrs", previous:"Last Month - 29hrs"},
      study:{current:"13hrs", previous:"Last Month - 19hrs"},
      exercise:{current:"11hrs", previous:"Last Month - 18hrs"},
      social:{current:"21hrs", previous:"Last Month - 23hrs"},
      selfcare:{current:"7hrs", previous:"Last Month - 11hrs"},
    },
};
  
    const viewButtons=document.querySelectorAll(".view-btn");
    
    const updateCards=(timeframe) => 
    {
        document.getElementById("work-time").textContent=data[timeframe].work.current;
        document.getElementById("work-prev").textContent=data[timeframe].work.previous;
  
        document.getElementById("play-time").textContent=data[timeframe].play.current;
        document.getElementById("play-prev").textContent=data[timeframe].play.previous;

        document.getElementById("study-time").textContent=data[timeframe].study.current;
        document.getElementById("study-prev").textContent=data[timeframe].study.previous;
  
        document.getElementById("exercise-time").textContent=data[timeframe].exercise.current;
        document.getElementById("exercise-prev").textContent=data[timeframe].exercise.previous;

        document.getElementById("social-time").textContent=data[timeframe].social.current;
        document.getElementById("social-prev").textContent=data[timeframe].social.previous;
  
        document.getElementById("selfcare-time").textContent=data[timeframe].selfcare.current;
        document.getElementById("selfcare-prev").textContent=data[timeframe].selfcare.previous;

    };
  
    viewButtons.forEach
    ((btn)=>{
        btn.addEventListener("click",()=>{
            viewButtons.forEach((b)=>b.classList.remove("active"));
            btn.classList.add("active");
            updateCards(btn.id);
        });
    });

    
    document.getElementById("weekly").classList.add("active"); // Highlight the Weekly button

updateCards("weekly"); 