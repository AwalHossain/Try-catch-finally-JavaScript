function  reverseString(str) {
    //Fitst make the string split
    let split = str.split('');
    console.log(split);
//after split make them reverse
    let reverse = split.reverse();
    console.log(reverse);
    // Finally, join them 
    let join = reverse.join('');
    console.log(join);
 }


reverseString('javascript')