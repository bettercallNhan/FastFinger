let words = ['savage','boomin','future','lamar','bobby','keems','gunna','choppa','kayne','rocky'];
let random = Math.floor(Math.random()* words.length);
let tungu = document.getElementById("Randomword");
let input = document.getElementById("inputWord");
let resetBTN = document.getElementById("resetBTN");
let score = document.getElementById("scrore");
let timecount = document.getElementById("time");
let point = 0 ;
let time = 10 ;

resetBTN.addEventListener("click",pointagain);// click thi reset diem ve 0 timer ve 10
//1. Random từ khoá 
let Randomword = words[random];
tungu.innerHTML=Randomword;

/// ham gan diem = 0 khi het thoi gian
function pointagain(){
    point = 0 ;
    time = 10
    again();
}
// ham de nhan vao cai input minh nhap 
input.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        if (input.value !== Randomword){
            point--;
            if(point<=0){
                point = 0 ;
            }
            again();
        }
        else{
            point++ ;
            again();
        }
    }
});
function again(){  // /// ham de chay lai game khi co su thay doi ve diem
    input.value ="";
    time = 10 ;
    score.innerHTML = "Score: " + point;
    Randomword = words[Math.floor(Math.random()* words.length)];
    tungu.innerHTML = Randomword;       
}


// 3. Có countdown thời gian
// 4. reset time
let countdown = setInterval(countTime,1000);
function countTime(){
    timecount.innerHTML = "Timer : " + time; //nhan time cua html ???
    time--;
    if(time==0){ /// neu time toi 0 thi diem ve 0
        pointagain();
    }

}

//4. Restart khi hết thời gian 








