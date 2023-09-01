export function isValidName(name){
    let reg=/^[a-zA-Z]+$/;
    return reg.test(name)
}
export function isValidPhone(number){
    let reg=/^[6-9][0-9]{9}$/;
    return reg.test(number)
}
export function isValidEmail(email){
    let reg=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
    return reg.test(email)
}
