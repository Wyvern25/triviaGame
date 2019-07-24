var Correct = 0;
var Incorrect = 0;

var counter = 5;
	$('#counter').text(counter);

	var timer = setInterval(goDown, 1*1000);

	function goDown(){
		counter--;
		$('#counter').text(counter);

		if (counter == 0){
			$("input[type='submit']").attr('disabled', true);
			clearInterval(timer);
			$('#content').text('time is up!')
		}

	}


	$("input[type='submit']").on('click', function(){
		var answer = $("input[name='cap']:checked").val();

		if ((answer == 'sacramento') || (answer == '3')) {
            Correct++;
            $('#content').text('correct');
            clearInterval(timer);

		}else{
            Incorrect++
            $('#content').text('incorrect')
		}
        $('#correct').text(Correct);
        $('#incorrect').text(Incorrect);
		event.preventDefault(); //prevent the page from refreshing
	});
