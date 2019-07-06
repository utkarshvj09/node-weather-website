console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
// console.log(response)  
// response.json().then((data)=>{
//         console.log(data)
//     })
// })

const weatherForm=document.querySelector('form');
const search=document.querySelector('input');
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')

weatherForm.addEventListener('submit',(event)=>{
   event.preventDefault();
   console.log(search.value);
   const location=search.value;


     messageOne.textContent='Loading......';
    messageTwo.textContent='';
   console.log('testing');
   fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    console.log(response)  


    response.json().then((data)=>{
        if(!data.error){
            messageOne.textContent=data.location
            messageTwo.textContent=data.forecast
            console.log(data.forecast)
            console.log(data.location)
            // console.log(error)
        }else{
            messageOne.textContent=data.error
            console.log(data.error,"Something went wrong")
        }  })
    })
    
})


