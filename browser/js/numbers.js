var
counter = 5,
stop = 10,
numbers = [],
numDisplay = '<h3>{ ';


countdown = () => {
    $('#countdown').html('Going away in ' + counter)
    counter--;

    if (counter > 0) {
        setTimeout(countdown, 1100);
    }
    else {
        $('#countdown').empty();
        loadTest()
    }
}


loadTest = () => {
    let input = '<label for="answer">What numbers do you remember?<input type="text" id="answer"><label>';
    let submit = '<label><button id="submit" type="button" class="button">Submit</button><label>';
    $('#numDisplay').html(input+submit);
    $('#submit').click(scoreTest);
},


scoreTest = (Event) => {
    let rawAnswer = $('#answer').val();
    let answer = rawAnswer.split(/\s/);
    let correct = 0;
    let results = '<table><thead><td>guessed</td><td>actual</td></tr></thead>';

    Event.preventDefault();
    answer.forEach( (attempt, i) => {
        results += '<tr><td>' + attempt + '</td><td>' + numbers[i] + '</td></tr>';
        if (parseInt(attempt.trim()) === parseInt(numbers[i])) {
            correct++;
        }
    });

    if (answer.length < numbers.length) {
        let i = numbers.length - answer.length;
        while (i) {
            results += '<tr><td>null</td><td>' + numbers[i] + '</td></tr>';
            i--;
        }
    }

    results += '</table> your score: ' + Math.round((correct/numbers.length)*100) + '%'
    $('#numDisplay').html(results);
    $('#countdown').html('<label><button onclick="window.location=\'/\';" type="button" class="button">Reset</button><label>')
}

showResult = (results) => {
};


window.onload = () => {
    let i = 0;

    while (i < stop) {
        let number = Math.round(Math.random()*21);
        numbers.push(number);
        numDisplay += number + ', ';
        i++;
    }

    numDisplay = numDisplay.replace(/, $/, ' }</h3>');
    $('#numDisplay').html(numDisplay);

    countdown();
};
