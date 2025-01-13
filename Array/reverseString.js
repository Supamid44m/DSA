function reverseString(character) {
    let arr = []
    let reverseCharacter = ''

    if (!character || character.length < 2 || typeof character !== 'string') {
        return "Error";
    }

    for (let i = 0; i < character.length; i++) {
        arr.push(character[i]);
    }

    for (let j = arr.length - 1; j >= 0; j--) {
        reverseCharacter += character[j];
    }

    // for (let i = character.length - 1; j >= 0; i++) {
    //         arr.push(character[i]);
    //     }
    // return arr.join('');

    // for (let j = character.length - 1; j >= 0; j--) {
    //     reverseCharacter += character[j];
    // }

    return reverseCharacter


    ///  space complexity O(n)
    ///  time complexity  O(n)
}

console.log(reverseString("Hi from world"));