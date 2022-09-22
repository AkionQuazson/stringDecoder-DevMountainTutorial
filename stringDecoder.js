const decoder = (code) => {
    let codeArr = code.split('');
    let result = '';
    for (let i = 0; i < codeArr.length; i++){
        if (parseInt(codeArr[i]) >= 0) {
            i += +codeArr[i];
        }
        else {
            result += codeArr[i];
        }
    }
    return result;
}

console.log(decoder('0h2xce5ngbrdy'));
console.log(decoder('3vdfn'));
console.log(decoder('0r'));
console.log(decoder('2bna0p1mp2osl0e'));
console.log(decoder('0y4akjfe0s'));