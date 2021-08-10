var notfound = true;
var message = null;
var notbroken = true;
var array = [];
var times = 1;
var num
var longest = [];
var biggest = 0;
var globalbig = 0;
var globalbigarray = 0;
var legnagyobbszam = 0;
var longestarray = 0;

function add(szam){
	num = szam;
	
	while(notbroken){		
		if(times == 1000) {
			console.log("done", times)
			notfound = false;
			notbroken = false;
			break;
		} else { times++ }
		
		array.push(num);
		
		if(num % 2 == 0) {
			num = Math.floor(num/2)
			continue;
		}
		
		if(num == 1) {
			notbroken = false;
			break;
		}
		num = Math.floor(num*3)
		num += 1
	}
	return;
}

function eh(){
	for (let v = 1; v <= hanyszor; v++){
		add(v);
		
		array.forEach((a) => {
			if(a > biggest) biggest = a;
			if(biggest > globalbig) {
				globalbig = biggest
				globalbigarray = array[0];
			};
		})
		if(array.length > longest.length) {
			longest = array;
			longestarray = longest[0]
		};
		
		if(v == hanyszor){
			console.dir(longest, {'maxArrayLength': null});
			console.log("\nlegnagyobb szam:", globalbig, "\nlegnagyobb szam array:", globalbigarray, "\nleghosszabb array hossza:", longest.length, "\nleghosszabb array:", longestarray)
		}
		if(notfound){
			notbroken = true;
			array = [];
			times = 0;
			continue;
		} else {
			console("congratulación!!")
			console.dir(array, {'maxArrayLength': 1001});
			break;
		}	
	}
}
var hanyszor = 100000000
eh();
