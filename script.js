document.querySelector('.glass-morphism-container-hover-effect').onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
   
  }
  
  
  let url = 'https://covid19.th-stat.com/api/open/today';
  
  
  const getCovidApi = (url)=>{
        
     fetch(url)
    .then((response)=> {
        return response.json();
    })
    .then((data)=>{
       
       document.getElementById("new_case").innerHTML = data.NewConfirmed;
       document.getElementById("updated_date").innerHTML ="Updated on: "+ data.UpdateDate;
       
       return;
    })
    .catch((err)=>{console.log('error is' + err)})
    
  }
  getCovidApi(url)
  
  