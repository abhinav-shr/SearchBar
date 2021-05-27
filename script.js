// const search = document.querySelector(".search");
// const btn = document.querySelector('button');

// let count = 0;
// btn.addEventListener('click',() => {
//     count++;
//     update();
// });

// function update(){
//     if(count===1){
//         search.classList.add('active');
//         btn.classList.add('close');
//         console.log(search);
//         console.log(btn);
//         console.log(count);
//     };
//     if(count===2){
//         search.classList.remove('active');
//         btn.classList.remove('close');
        
//         console.log(search);
//         count--;
//         count--;
//         console.log(count);
//     };      
// };



//Code 2
const btn = document.querySelector("button");
const searchbar = document.querySelector(".searchbar");

let count = 0;
btn.addEventListener('click',() => {
        count++;
        update2();}
    );

function update2(){
    if(count===1){
        searchbar.classList.add('active');
        console.log(searchbar);
        console.log(btn);
        console.log(count);
    };
    if(count===2){
        searchbar.classList.remove('active');
        console.log(searchbar);
        count--;
        count--;
        console.log(count);
    };      
};