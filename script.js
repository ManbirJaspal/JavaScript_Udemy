/*var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

*/
//
//var name = 'john';
//var age = 26;
////
////console.log(name+age);
////console.log(age + age);
//
//var job, isMarried;
//
//console.log(job);
//
//job = 'teacher';
//isMarried = false;
//
//console.log(name + ' is a ' + age + '  years old ' + job + '. Is he married ? ' + isMarried + '.' );
//
//age = 'thirty six';
//job = 'driver';
//
//console.log(name + ' is a ' + age + '  years old ' + job + '. Is he married ? ' + isMarried + '.' );
//
//var lastName = prompt('what is the last name ?');
//console.log(lastName);
//
//alert(name + ' is a ' + age + '  years old ' + job + '. Is he married ? ' + isMarried + '.' );

// Lecture: operators

// Lecture: arrays

//var names = {'John', 'Jane', 'Mark'};
//var years = new Array(1990, 1969, 1948);
//console.log(names[2]);
//names[1] = 'Ben';
//console.log(names);

//var john = ['john' , 'Smith', 1990, 'teacher'];


// - - - Coding challenge - - -




function printFullAge(years) {
    
    var ages = []; 
    var fullAges = [];


for ( var i = 0 ; i< years.length ; i++) {
    ages[i] = 2016 - years [i];
}

console.log(ages);

for (i = 0; i< ages.length ; i++)
    {
        
        if ( ages[i] >= 18) {
            
            console.log ( 'Person '+ (i + 1)  + ' with current age of ' + ages[i] + ' is of full age');
            fullAges.push(true);
        }
        else {
            console.log('Person ' + (i + 1) + ' with current age of ' + ages[i] + ' is not of full age');
            fullAges.push(false);
        }
        
       
    }
    
    return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];

var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
    




