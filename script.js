
const setOfWords = [
    "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
    "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
    "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character",
    "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
    "Helen Keller is the author of this thought-provoking quote about life. I love her adventurous spirit and all or nothing attitude!",
    "Albert Einstein authored this encouraging and uplifting quote. In just five words, he captured the essence of his intellectual philosophy and inspired others to embrace the creative process.",
    "For Every Reason It’s Not Possible, There Are Hundreds Of People Who Have Faced The Same Circumstances And Succeeded"
]


const msg = document.getElementById("msg");
const typedWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime,endTime;

const playGame=()=>{
    let randomNumber=Math.floor(Math.random()*setOfWords.length);
    msg.innerText=setOfWords[randomNumber];
    let date=new Date();
    startTime=date.getTime();
    btn.innerText='Done';
};
const endPlay=()=>{
    let date=new Date();
    endTime=date.getTime();
    let totalTime=((endTime-startTime)/1000);
    console.log(totalTime);

    let totalstr=typedWords.value;
    let wordCount=wordCounter(totalstr)

    let speed=Math.round((wordCount/totalTime)*60);
    let finalMsg="You typed total at " + speed + " words  per minutes, "

    finalMsg +=compareWords(msg.innerText,totalstr);


    msg.innerText=finalMsg;
};
const compareWords=(str1,str2)=>{
let words1=str1.split(" ");
let words2=str2.split(" ");
let cnt=0;

words1.forEach(function(item,index){
if(item==words2[index]){
cnt++;
}
})
let errorWords=(words1.length-cnt);
return(cnt + " correct out of " + words1.length + " words and the total number of error are " + errorWords + ".");
}

const wordCounter=(str)=>{
    let response=str.split(" ").length;
    console.log(response )
    return response;
}

// creating button events
btn.addEventListener('click',function(){
  
   if(this.innerText=='Start'){
       typedWords.disabled=false;
       msg.style.color = "black";
       playGame();
   }else if(this.innerText=='Done' ){
       typedWords.disabled=true;
       btn.innerText='Start';
       msg.style.color = "blue";
       endPlay();
   } 
})
 