// function play(){
//     const homeSection= document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // when click play button show playground
//     const playGroundSection= document.getElementById('playground');
//     playGroundSection.classList.remove('hidden');
// }


function continueGame(){
    const alphabet= getARandomAlphabet();
    // console.log('your random alphabet' alphabet)
}

function play(){
    hideElementById('home-screen');
    showElementById('playground');
    continueGame()
}