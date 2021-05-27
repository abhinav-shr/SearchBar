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

btn.addEventListener('click',() => {
    searchbar.classList.toggle('active')}
    );
