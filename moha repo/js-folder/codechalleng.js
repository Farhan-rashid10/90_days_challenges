function calculateGrade(marks) {
    if (marks >= 75) {
        return 'A'
    } else if ( marks >=54 && marks <=74 )
    {
        return "B"
    }else if ( marks >= 33 && marks <= 53){
        return "C"
    }
    else if (marks <= 40){
        return "D"
    }
}
console.log(calculateGrade(50))

//required conditions from the user
const studentMarks = prompt('Enter student marks (btwnn 0 and 100):' );
if(!isNaN(studentMarks) && studentMarks <=100 && studentMarks >=0){
    //calling the function above 
    const grade = calculateGrade (studentMarks)
    console.log(grade)
 }
 else{
    console.log('invalid input, please input a numbber between 0 and 100')

    
}


