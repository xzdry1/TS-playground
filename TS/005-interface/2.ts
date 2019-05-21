interface userFunc {
    (name: string, age: number): void;
}

let createUser: userFunc = (name, age) => {
    console.log(name, age);
}
createUser('dry', 16);
export { }