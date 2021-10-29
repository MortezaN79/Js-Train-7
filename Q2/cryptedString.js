function encryptedString(length, num , string){
    let str1 = lastToFirst(length, num ,string);
    let n = num %26;
    str1 = str1.toString();
    for (let i = 0; i <n ; i++) {
        str1 = nextLetter(length , str1)
    }
    return str1;
}

function lastToFirst(length, num , string) {
    if (num === 0)
        return string;

    console.log(string)
    let str = string.toString();
    str =str.substring(0,length-1)
    let str1= string[length - 1] + str;
    return lastToFirst(length, num - 1, str1 );

}
function nextLetter(length, string) {
    let newStr = '';
    let str = string.toString();
    for (let i = 0; i < length; i++){
        newStr += str[i] === 'z'? 'a' : String.fromCharCode(str.charCodeAt(i)+1) ;
    }
    return newStr;
}

console.log(encryptedString(4,5,'abcd'))