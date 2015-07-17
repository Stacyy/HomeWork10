function Man(name, age) {
    this.name = name;
    this.age = age;
}

Man.prototype.live = function () {
    return "Your age: " + this.age + ". " + this.name + ", enjoy every day.";
};

function Student(name, age) {
    Man.apply(this, arguments);
}

Student.prototype = Object.create(Man.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function () {
    return "My name is " + this.name + ". I'm studying at university.";
}

function Professor(surname, science) {
    this.surname = surname;
    this.science = science;
    this.hours = 0;
}

Professor.prototype.numOfHours = function (hours) {
    if (hours <= 30) {
        this.hours = hours;
        return "Number of hours per week: " + this.hours;
    } else {
        return "Number of hours per week can not exceed 30";
    }
}

Professor.prototype.addHours = function (hours) {
    var addH = this.hours + hours;
    if (addH <= 30) {
        this.hours = addH;
        return "You add: " + hours + " hours. Total number of hours = " + this.hours;
    } else {
        return "Total number of hours = " + this.hours + ". You add: " + hours + " hours. It's too much.  Add fewer hours";
}
};


function duckType() {
	var myObj = this;
    if("study" in myObj ){
		return "Student";
	} else{
		return "Man";
	}
}