export default interface Person {
    fName: string;
    sName: string;
}

export function sayHi(p: Person): string {
    return `Hello, ${p.fName}!`;
}