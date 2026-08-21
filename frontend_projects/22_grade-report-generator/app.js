function getLetterGrade(score){
    if(score < 0 || score > 100){
        return 'Out of Range.'
    }

    let grade;

    switch(true){
        case score >= 90:
            grade = 'A';
            break;
        case score >= 80:
            grade = 'B';
            break;
        case score >= 70:
            grade = 'C';
            break;
        case score >= 60:
            grade = 'D'
            break;
        default:
            grade = 'F';
    }
    
    return grade;
}
function hasPassed(score){
    if(score >= 60 && score < 100){
        return true;
    }
    else{
        return false;
    }
}
function getFeedback(grade){
    if(grade === 'A' || grade === 'B'){
        return 'Excellent work'
    }
    else if(grade === 'C' || grade === 'D'){
        return 'You passed'
    }
    else if(grade === 'F'){
        return 'Keep practicing'
    }
    else{
        return 'Unknown grade'
    }
}
function createGradeReport(name, score){
    const grade = getLetterGrade(score);
    const passed = hasPassed(score);
    const feedback = getFeedback(grade);

    return {
        name,
        score,
        grade,
        passed,
        feedback,
    }
}

console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));

