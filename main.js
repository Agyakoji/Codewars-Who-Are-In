// Given two arrays of strings a1 and a2, return a sorted array r in
//lexicographical order of the strings of a1 which are substrings of strings of a2

                        // SOLUTION
function sortedLexicoArray(array1, array2){
    // decalre a variable
    let sortedArray = []
    // check through the arrays for substrings
    outer:for( let i = 0; i < array1.length; i++){
        for( let j = 0; j < array2.length; j++){
            if(array2[j].includes(array1[i])){
                sortedArray.push(array1[i])
                continue outer
            }
        }
    }
    return sortedArray.sort()
} 
alert(sortedLexicoArray(['arp', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong', 'stronger']))
