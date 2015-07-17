describe("Test Man, Student, Professor suite", function(){
	var man, student, professor;
	
	beforeEach(function(){
		man = new Man("Pam", 69);
		student = new Student("Phil", 21);
		professor = new Professor("Gordon", "Information security")
	});
	
	
	
	describe("Test Man Suite", function() {
	
		it("Name should be 'string'", function(){
			expect(man.name).toContain("");
		})
		it("Age should be greater than 0", function(){
			expect (man.age > 0).toBeTruthy();
		});
		it (" should show age of man", function(){
			expect(man.live()).toEqual("Your age: " + man.age + ". " + man.name + ", enjoy every day.");
		});
		
		
	});
	
	describe("Test Student Suite", function(){
		
		it(" Name should be 'string'", function(){
			expect(student.name).toContain("");
		})
		
		it(" Age should be greater than 0", function(){
			expect (student.age > 0).toBeTruthy();
		});
		
		it (" It should show age of student", function(){
			expect(student.live()).toEqual("Your age: " + student.age + ". " + student.name + ", enjoy every day.");
		});
		
		it (" It should show that the student learns", function(){
			expect(student.study()).toEqual("My name is " +student.name+". I'm studying at university.")
		});
	});
	
	describe("Test Professor Suite", function(){
		it(" Surname should be 'string'", function(){
			expect(professor.surname).toContain("");
		});
		
		it("Science should be 'string'", function(){
			expect(professor.science).toContain("");
		});
		
		it(" Hours should be less than 30", function(){
			var hours = 40;
			
			expect (professor.numOfHours(hours) ).toEqual("Number of hours per week can not exceed 30");
		});
		
		it("It should show number of hours lectures per week", function(){	
			var hours = 10;
			expect(professor.numOfHours(hours) ).toEqual("Number of hours per week: " + professor.hours)
		});
		
		it("It should add hours and show total number", function(){
			var hours = 10;
			expect(professor.addHours(hours)).toEqual("You add: " + hours + " hours. Total number of hours = " + professor.hours);
		});
		
		it("It should add hours and show total number", function(){
			var hours = 35;
			expect(professor.addHours(hours)).toEqual("Total number of hours = " + professor.hours + ". You add: " + hours + " hours. It's too much.  Add fewer hours");
		});
	});
	
		it("It should show: 'Man'", function(){
			expect(duckType.call(man)).toEqual("Man");
		});
		
		it("It should show: 'Student'", function(){
			expect(duckType.call(student)).toEqual("Student");
		});
})