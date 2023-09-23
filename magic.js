let input = document.querySelector('input');

let trackedWord = document.querySelector('div');

const letters = (all_letters) => {

    let create = document.createElement('div');

    create.innerHTML = all_letters.key;
    
    trackedWord.appendChild(create);
}
// console.log(letters());
addEventListener('keypress', letters);