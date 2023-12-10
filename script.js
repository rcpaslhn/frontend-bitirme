const plus_btn=document.getElementById("plus")
const minus_btn =document.getElementById("minus")
const div =  document.querySelectorAll(".kutu")[0]
const carpi =document.getElementById("carpi")
const satir1=document.getElementById("birincisatir")
const birincip=document.getElementById("birinci_p")


let toplam=0

plus_btn.addEventListener("click",()=>{
   
   for(let i=0;i<=1;i++){
toplam+=i
 }
birincip.textContent=(Number(div.textContent)+1)*65
 return div.textContent=toplam
  })

minus_btn.addEventListener("click",()=>{

div.textContent=toplam-=1
if(birincip.textContent>=0){
    birincip.textContent=(Number(div.textContent))*65
}

})

carpi.addEventListener("click",()=>{
    satir1.remove()
})






