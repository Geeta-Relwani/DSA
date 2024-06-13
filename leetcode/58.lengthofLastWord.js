var lengthOfLastWord = function(s) {
    let lastWordLength = 0;
    console.log('hi'+lastWordLength)

    for(let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            lastWordLength++;
        } else if (lastWordLength > 0) {
            break;
        }
    }

    console.log('of lat work'+ lastWordLength)

    return lastWordLength;
    
};

lengthOfLastWord('The last word lenght is four  ')