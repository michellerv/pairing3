var numbers = [8, 2, 60, 42, 89, 73, 24, 56]

for (var i = 0; i < numbers.length; i++){
    if (numbers[i] >= 30){
        console.log(numbers[i])
    }
}

function printOver60(numbers){
    for (var i = 0; i < numbers.length; i++){
        if (numbers[i] >= 60){
            console.log(numbers[i])
        }
    }
}

printOver60(numbers)