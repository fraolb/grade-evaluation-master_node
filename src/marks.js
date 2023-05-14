// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math,english,science,social,language) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(math == undefined || english == undefined || science == undefined || social == undefined || language == undefined){
                reject('Null values for marks')
            }
            resolve(math+english+science+social+language)
        },2000)
        }) 
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(totalMarks == undefined){
                reject('Null values for marks')
            }
            resolve(totalMarks/5)
        },2000)
    }) 
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('the average is ',averageMarks)
            var grade = null
            if(averageMarks == undefined){
                reject('Null values for marks')
            }
            else if(averageMarks >= 95){
                grade = 'A+'
            }
            else if(averageMarks >=80 && averageMarks <= 94){
                grade = 'A'
            }
            else if(averageMarks >=70 && averageMarks <=79){
                grade = 'B'
            }
            else if(averageMarks >=60 && averageMarks <=69){
                grade = 'C'
            }
            else if(averageMarks >=50 && averageMarks <=59){
                grade = 'E'
            }
            else {
                grade = 'F'
            }
            resolve(grade)
        },2000)
    })   
}

module.exports = {
    calculateAverageMarks,calculateGrade,calculateTotalMarks
}
