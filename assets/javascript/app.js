var Correct = 0;
var Incorrect = 0;

var counter = 30;
	$('#counter').text(counter);

	var timer = setInterval(goDown, 1*1000);

	function goDown(){
		counter--;
		$('#counter').text(counter);

		if (counter == 0){
			$("input[type='submit']").attr('disabled', true);
			clearInterval(timer);
			$('#content').text('time is up!');
			Incorrect=4-Correct;
			$('#incorrect').text(Incorrect);
			$('#correct').text(Correct);
		}

	}


	$("input[type='submit']").on('click', function(){
		
		var ans1 = $("input[name='math1']:checked").val();
		var ans2 = $("input[name='math2']:checked").val();
		var ans3 = $("input[name='math3']:checked").val();
		var ans4 = $("input[name='math4']:checked").val();
		console.log(ans1);
		console.log(ans2);
		console.log(ans3);
		console.log(ans4);
		
		event.preventDefault();
		if (ans1 == '317'){
			Correct++;
			$('#correct').text(Correct);
		}else{
			Incorrect++;
			$('#incorrect').text(Incorrect);
		}
		if (ans2 == '3') {
			Correct++;
			$('#correct').text(Correct);
		}else{
			Incorrect++;
			$('#incorrect').text(Incorrect);
		}	
		if (ans3 == '120') {
			Correct++;
			$('#correct').text(Correct);
		}else{
			Incorrect++;
			$('#incorrect').text(Incorrect);
		}
		if (ans4 == '3') {
			Correct++;
			$('#correct').text(Correct);
		}		
		else{
			Incorrect++;
			$('#incorrect').text(Incorrect);
		}
		
        //$('#correct').text(Correct);
       // $('#incorrect').text(Incorrect);
		event.preventDefault(); //prevent the page from refreshing
		clearInterval(timer);
		
		$("input[type='submit']").attr('disabled', true);
		
	});
