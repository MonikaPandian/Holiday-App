// https://date.nager.at/api/v3/PublicHolidays/2017/AT
// https://restcountries.com/v2/all


function getHolidaydata(){

var holidayContainer=document.querySelector('.holidayContainer')

var string = document.querySelector('.countryname').value
var countryName=string.charAt(0).toUpperCase() + string.slice(1);
console.log(countryName)

var year= document.querySelector('.year').value
console.log(year)
var temp=[];
var temp1=[];
try{
var request=fetch('https://restcountries.com/v2/all')
.then((res)=>{
  return res.json();
})
.then((data)=>{
  console.log(data)

var result=data.filter((ele)=>ele.name===`${countryName}`)
console.log(result[0].alpha2Code)
var countryCode = result[0].alpha2Code
console.log(year)
  

var req=fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`)
.then((res)=>{  
  return res.json();
})
.then((data)=>{
  console.log(data)
  for(var i=0;i<data.length;i++){
    temp.push(data[i].date)
    temp1.push(data[i].name)
  }

  holidayContainer.innerHTML=`
      <div class="card text-center">
            <div class="card-header">
                <h5>Holidays</h5>
            </div>
            <div class="card-body">                             
            <p class="card-text">${temp}</p>  
            <p class="card-text">${temp1}</p>                      
            </div>`                                
})
.catch((err)=>{
  console.log(err)
 alert("Only 110 countries are supported")
})  
})
}

catch(error){
  console.log(error)
}
}


