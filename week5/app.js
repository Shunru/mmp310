function submitAnswers(){
	var total = 6;
	var score = 0;

	//input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	var q6 = document.forms["quizForm"]["q6"].value;

	//loop
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert('You Missed Question ' +i);
			return false;
		}
	}

	//Set Correct Answers
	var answers = ["B","C","D","C","D","B"];

	//Check Answers

    for (i =1; i<= total; i++){
		if(eval('q'+i)== answers[i - 1]){
			score++;
		}
	}
	//Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<p> You Scored <span>'+score+'</span> out of <span>'+total+'</span></p>';
	document.getElementById('results').style.display = 'block';
	//alert('You Scored '+ score +' out of ' + total);

	return false;
}
