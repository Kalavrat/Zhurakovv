a = 4.451252664
b = 5.19
n = 4

a = a * 10 ** n
console.log(a)
ost_a = a % 1
console.log(ost_a)
a = a - ost_a
console.log(a)
a = a / 10 ** n
console.log(a) 

b = b * 10 ** n
console.log(b)
ost_b = b % 1
console.log(ost_b)
a = a - ost_b
console.log(b)
a = a / 10 ** n
console.log(b)

console.log(a == b)
console.log(a > b)