function hideSection(elementId){
     const eId = document.getElementById(elementId);
     eId.classList.add('hidden');
}
function showSection(elementId){
    const eId = document.getElementById(elementId);
    eId.classList.remove('hidden');
}
function continueGame(){
    //random alphabet  generate
    const alphaString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphaString.split('');
    //random number generate
     const randnumber = Math.random()*25;
     const index = Math.round(randnumber);
     const alphabet = alphabets[index];
     document.getElementById('displayAlphabet').innerText = alphabet;

}
document.getElementById('playBtn').addEventListener('click',()=>{
     hideSection('homeSec');
     showSection('groundSec');
     continueGame();

})