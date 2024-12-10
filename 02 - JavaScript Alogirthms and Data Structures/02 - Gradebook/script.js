function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

function getGrade(score) {
    if (score < 60) {
        return "F";
    } 
    else if (score >= 60 && score < 70) {
        return "D";
    }
    else if (score >= 70 && score < 80) {
        return "C";
    }
    else if (score >= 80 && score < 90) {
        return "B";
    }
    else if (score >= 90 && score < 100) {
        return "A";
    }
    else {
        return "A++";
    }
}

function hasPassingGrade(score) {
    return score >= 60;
}

function studentMsg(totalScores, studentScore) {
    let message = "Class average: " + getAverage(totalScores) + ". ";
    message += "Your grade: " + getGrade(studentScore) + ". ";
    if (hasPassingGrade(studentScore)) {
        return message + "You passed the course.";
    }
    else {
        return message + "You failed the course.";
    }
}