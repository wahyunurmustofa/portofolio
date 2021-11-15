const txtElement = ['Saya Adalah Seorang ........'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let word = '';

(function ngetik(){
    
    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.effect-key').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 200);
})();