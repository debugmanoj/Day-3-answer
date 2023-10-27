//Question 3 =>

// How to compare two JSON have the same properties without order?
// a. let objl = { name: "Person 1", age:5 };
// b. let obj2 = { age:5, name: "Person 1" };
let objl = { name: "Person 1", age:5 };
let obj2 = { age:5, name: "Person 1" };
var res1=JSON.stringify(objl)
var res2=JSON.stringify(obj2)
console.log(res1)
console.log(res2)
console.log(res1==res2)


// Question 2=>

// Use the rest countries' API URL -> https://restcountries.com/v3.1/all and display all the country
// flags in the console

var request2=new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all","true");
request2.send();
request2.onload=function(){
    var data2=request2.response;
    var result=JSON.parse(data2)

    for(var i=0;i<result.length;i++){
        console.log(result[i].flags.png);
    }
}

// Question 3=>

// Use the same rest countries and print all countries names, regions, sub-region and populations

var request3=new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all","true");
request3.send();
request3.onload=function(){
    var data3=request3.response;
    var result=JSON.parse(data3)
    for(var i=0;i<result.length;i++){
        console.log("Countryname: "+result[i].name.common,"\n\nRegion: "+result[i].region,"\n\nsubregion: "+result[i].subregion,"\n\nPopulation: "+result[i].population);
    }
}