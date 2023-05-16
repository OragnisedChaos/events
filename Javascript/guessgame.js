let maxi=parseInt(prompt("enter the maximum number!!"));
const target = Math.floor(Math.random()*maxi)+1;
let guess = parseInt(prompt("enter your first guess"));
while(parseInt(guess) !== target)
{
    if((guess) === 'q')
    {
        break;
    }
    if(guess > target)
    {
        guess=prompt("Too high !!! Enter a new guess");
    }
    else{
        guess =prompt("Too low !!! Enter a new number");
    }
}
if(guess === 'q')
{
    console.log("okay you quit");
}
else
{
    console.log("congrats !!! you won");
}