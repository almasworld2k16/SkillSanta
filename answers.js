/*Q1. 
var dateToday = new Date('October 15, 1996 05:35:32:77 GMT+11:00');
How to fetch the millisecond according to universal time from a given Date object?*/

var dateToday = new Date('October 15, 1996 05:35:32:77 GMT+11:00');
 console.log(Math.floor(dateToday.getTime()/ 1000));
 
 /* Q2.
Write a JavaScript program to display the reading status (i.e. display book name, author
name and reading status) of the following books.
var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];*/

var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];
for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }
   
/* Q3. What will be the output of the following code?
var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company Console.log(emp1.company); 

OUT PUT : Uncaught SyntaxError: Unexpected identifier 

*/

/*  Q4. Consider the two functions below. Will they both return the same thing? Why or why
not?
function foo1()
{
return {
bar: "hello"
};
}
function foo2()
return
{
bar: "hello"
};
}


OUT PUT : Uncaught SyntaxError: Uncaught SyntaxError: Unexpected token 'return' 
{*/

/*Q5.
var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function(num) {
return num / 2;
});
print(new_arr);
What will be the output for the above code? 

OUT PUT is in PDF format attatch to this file
 */
 
 /* Q6.
const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])
How to delete 'Beethoven' from set */

const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])
set.shift();
console.log(set);

/*Q7. Create a nested array object called operatingSystem and add below key and values
Name - Ubuntu , version - 18.4 , license - open source  */

const operatingSystem  = {
    Name: 'Ubuntu',
    version: '18.4',
    license: 'open source ',
};
console.log(operatingSystem);


