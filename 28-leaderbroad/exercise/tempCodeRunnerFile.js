let a = [1, 2, 3, 5];
const index = a.findIndex(item => item === 2);
if (index !== -1) {
    a.splice(index, 1);
}
console.log(a);