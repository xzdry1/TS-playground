
createUser({
    name: 'dry',
    age: 18,
    balance: 1,
    gender: '女'
})

interface User {
    name: string;
    age: number;
    gender?: string
    [key: string]: any
}
function createUser(data: User) {
    console.log(data);
}

export { }