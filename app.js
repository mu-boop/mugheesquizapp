

var questions = [{
    Question: "Which is the sixth most populated country of the world?",
    option1: "India",
    option2: "Brazil",
    option3: "Pakistan",
    option4: "None of them",
    ans: '2'
},
{
    Question: "The first news paper in the world was started by____________?",
    option1: "China",
    option2: "Japan",
    option3: "Usa",
    option4: "Uk",
    ans: '1'
},
{
    Question: "Who is the author of “Raqqat-e-Alamgiri” ?",
    option1: "Ishwar Das",
    option2: "Aurangzeb",
    option3: "Dara Shikhon",
    option4: "Mulla Daud",
    ans: '2'
},
{
    Question: "Who is the author of Khulasat-ul-Tawarikh ?",
    option1: "Sujan Raj Khatri",
    option2: "Abdul Hamid Lahori",
    option3: "Inyat Khan",
    option4: "Abul Fazl",
    ans: '1'
},
{
    Question: "Who wrote biography of Humayun ?",
    option1: "Hindal",
    option2: "Kamran",
    option3: "Gulbadan Begum",
    option4: "None of these",
    ans: '3'
}, {
    Question: "The flag of Malaysia carries a crescent and a fourteen pointed star. What do the 14 points of the star represent:",
    option1: "Multiracial society of Malaysia",
    option2: "Multi linguistic nature of Malaysian society",
    option3: "Royalty of Malaysia",
    option4: "Thirteen states and the Federal Government",
    ans: '4'
}, {
    Question: "Which city is called the City of Shaheens?",
    option1: "Lahore",
    option2: "Sargodha",
    option3: "Karachi",
    option4: "None of these",
    ans: '2'
}, {
    Question: "World Leprosy Day is observed internationally every year on ________ of January?",
    option1: "First Sunday",
    option2: "First Saturday",
    option3: "Last Sunday",
    option4: "Last Saturday",
    ans: '3'
}, {
    Question: "The Karakoram is a mountain range present in____________?",
    option1: "India",
    option2: "Pakistan",
    option3: "China",
    option4: "all of these",
    ans: '4'
}, {
    Question: "BIMAN is an airline of__________?",
    option1: "Sri Lanka",
    option2: "Afghanistan",
    option3: "Bangladesh",
    option4: "None of these",
    ans: '3'
}];



var qnum = document.getElementById("qnum");
var heading = document.getElementById('question')
var a = document.getElementById('opt1')
var b = document.getElementById('opt2')
var c = document.getElementById('opt3')
var d = document.getElementById('opt4')
var count = 0;
var btn = document.getElementById('btn');
var tick = document.getElementsByName('option');
var score = 0;
var timerMin = document.getElementById('mins');
var timerSec = document.getElementById('sec');
var min = 4;
var sec = 60;
timerMin.innerHTML = min
timerSec.innerHTML = sec



qnum.innerHTML = "Question 1 of 10"
heading.innerHTML = questions[0].Question;
a.innerHTML = questions[0].option1;
b.innerHTML = questions[0].option2;
c.innerHTML = questions[0].option3;
d.innerHTML = questions[0].option4;



function next() {
    count++
    qnum.innerHTML = "Question " + (count + 1) + " of 10"
    heading.innerHTML = questions[count].Question;
    a.innerHTML = questions[count].option1;
    b.innerHTML = questions[count].option2;
    c.innerHTML = questions[count].option3;
    d.innerHTML = questions[count].option4;
    btn.disabled = true;
    options()
    if (count == 9) {
        document.getElementById('btn').style.display = "none";
        document.getElementById('result-btn').className = "btn result-btn";
        resultbtn.disabled = false;
    }

}



function options(a) {
    for (var i = 0; i < tick.length; i++) {
        if (tick[i].checked) {
            tick[i].checked = false;
            if (tick[i].value == questions[count - 1].ans) {
                score +=10;
                 
            }
        }
     
    }
    var a =+ score;
    return a;
}
function enabl() {
    btn.disabled = false;
    // for (var i = 0; i < tick.length; i++) {
    //     if (tick[i].checked) {
    //         console.log(tick[i].parentNode)
    //         tick[i].parentNode.style.backgroundColor = ' rgb(0, 114, 89)'
    //     } else {
    //         tick[i].parentNode.style.backgroundColor = 'rgb(187, 187, 187)'
    //     }
    // }
}
function showResult(){ 
    var resultbtn = document.getElementById("result-btn")
    resultbtn.disabled = true;
    document.getElementById('main').style.display="none";
    document.getElementById('resut').className="main";
    document.getElementById('marks').innerHTML = score
    document.getElementById('correct').innerHTML = score/10;
    document.getElementById('wrong').innerHTML = (100-score)/10;
    document.getElementById('per').innerHTML = score + "%";

    var h = document.getElementById('pass');
    if(score > 40){
        h.innerHTML = "Pass"
    }else{
        h.innerHTML = "Fail"
    }
    
}

function time() {
    sec--
    timerSec.innerHTML = sec;
    if (sec == 0) {
        min--;
        timerMin.innerHTML = min;
        sec = 60;
        timerSec.innerHTML = sec
        if (sec == 60 && min == -1) {
            clearInterval()
            showResult()
            
        }
    } 

}
function start() {
    setInterval(time, 1000)
}
start()



