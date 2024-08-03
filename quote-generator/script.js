// variable.

let btn = document.querySelector('#new-qoute');
let qoute = document.querySelector('.qoute');
let person = document.querySelector('.person');

const qoutes = [{
    qoute : ' "The best way to find yourself is to lose yourself in the service of other" ',
    person : ' Mahatma Gandhi'
},
{
    qoute : ' "If you want to live a happy life, tie it to a gaol, not to people or things." ',
    person : 'Albert Einstein'
},
{
    qoute : '"Time and Tide Wait for none." ',
    person : 'Unknown'
},
{
    qoute : '"A friend is in need, a friend is indeed. " ',
    person : 'Unknown'
}];

btn.addEventListener('click', function(){

    let newK = Math.floor(Math.random() * qoutes.length);
    
    qoute.innerText = qoutes[newK].qoute;
    person.innerText = qoutes[newK].person;
})