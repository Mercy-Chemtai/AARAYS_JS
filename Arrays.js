 //Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
 let array1 = [3,7,34,90,12]
  let p = array1[array1.length-1]
  console.log({p})

 let array2  = [true,"green","where",12,56]
  let k = array2[array2.length-1]
  console.log({k})

  //Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
  let stringmyPets = ["Cow","Bird","Snake","Dog"] ;
  console.log(stringmyPets.toString())

  //Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ]
   let arr3 = [-5,9,5,3,2,-3,6,8,4,1]
   let ascend = arr3[arr3.sort]
   console.log(arr3.sort())

   //Write a program to remove duplicates from the following array.Console the array without duplicates,
   // and console another array that only contains the duplicates
   let arr = ["apple", "mango", "apple",   "orange", "mango", "mango"];
    let removeduplicate = []
    let duplicate = []
    arr.forEach(mango=>{
        if (!removeduplicate.includes(mango)){
            removeduplicate.push(mango);
        }
        else(duplicate.push(mango));
    });
    console.log({removeduplicate});
    console.log({duplicate});

     
//Write a JS script to search for the following word in the array."way"If the word is present,
// console it else console "the search word was not found"let arr5 = ["the", "way", "x", 4];
   let arr5 =["the","way","x",4]
   let search = "way";
   const searchIndex =arr5.indexOf(search);
   if(search==arr5[1]){console.log({search})}
   else{console.log("The search was not found")}

   
   

   //Write a JS script to sort the following string:let word = "sevink"
   let word = "sevink"
   console.log(word.split('').sort().join(''));





   


   




