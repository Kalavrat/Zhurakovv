n = 5
m = 100
maximum = Math.max(n,m)
minimum = Math.min(n,m)
number = (((Math.round(Math.random()*(maximum - minimum)) + minimum)* 2 + 1) / 2)
console.log(number)