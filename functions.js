function checkResult1() {
	//191(2) Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый
	//вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.
	
	let func1 = test(); 
	
		func1();  //выведет 10
	func1();
	func1();
		function test() {
			let num = 10;
			return function () {
				console.log(num);
				num--;
			};
		
	}
}
function checkResult2() {
	//191(3) Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый 
	//последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен.
	let func1 = test();
	for (let i = 0; i <= 10; i++)
	func1();
	function test() {
		let num = 10;
		return function () {
			if (num == 0) {
				console.log("отсчет окончен");
				}
			else {
				console.log(num);
				num--;
			}
		};		}
	
	}

	function checkResult3() {
		//Допишите следующий код так, чтобы его запуск алертом выводил '!':
		(function () {
			return function () {
				alert('!');
			};// какой-то код
		})()()();
	}

function test1() {
	let counter = 0;
	
	return function () {
		return function () {
			console.log(counter);
			counter++;
		};
	};


	let func = test1();

	let func1 = func();
	let func2 = func();
	func1();
	func2();
	func1();
	func2();
}

function checkResult4() {
	//192(13) Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
                
	//     (function() {
	// какой-то код
	//      })(1)(2);
	
	(function(num) {
  return function(num1) {
	  return num1 + num;
	  }
})(1)(2);
}
		
function checkResult5() {

function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}
	 
	let result = each(["sd", "f1", "asd", "sddd", "qwe"], function(str) {
	return str = str.split("").reverse().join("");
});

console.log(result);
	 
	 
	 
}
function checkResult6() {
	let arr = [1, 2, 3, 4, 5];

let result = arr.map(function(elem) {
	return Math.sqrt(elem); 
});

console.log(result);
}

function checkResult7() {
	let arr = [1, 2, 3, 4, 5];
function func(arr1) {
	console.log(arr1.shift(), arr1);
	
	if (arr1.length != 0) {
		func(arr1);
	}
}

func(arr);


}
