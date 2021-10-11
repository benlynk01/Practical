var lightEle = document.body.querySelector(".light");
var candleEle = document.body.querySelector(".candle");

var list = [
    {
        name: "Harry",
        age: 25
    },
    {
        name: "Larry",
        age: 15
    },
    {
        name: "Bert",
        age: 45
    },
    {
        name: "Jerry",
        age: 35
    },
    {
        name: "Berry",
        age: 5
    },
    {
        name: "Bart",
        age: 55
    }
];


for (var i=0; i<list.length; i++){
    var ele = document.createElement("div");
    var nameEle = document.createElement("h2");
    var ageEle = document.createElement("h4");
    nameEle.innerHTML = "Name: "+list[i].name;
    ageEle.innerHTML = "Age: " + list[i].age;
    if (list[i].age > 25){
        ageEle.style.color = "green";
    }
    ele.appendChild(nameEle);
    ele.appendChild(ageEle);
    candleEle.appendChild(ele);
}

var c = 5;

lightEle.innerHTML = "Counter = " + c;

function counter(){
    c = c + 1;
    lightEle.innerHTML = "Counter = " + c;
}

document.body.querySelector(".counter").addEventListener("click", function (){
    counter();
})