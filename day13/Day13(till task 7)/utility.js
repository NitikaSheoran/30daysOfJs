function add(a,b=0,c=0){
    return a+b+c;
}
const student = {
    name: "Nitika",
    dept: "CSE",
    year: "2nd",
    sgpa(){
        return 9.34;
    }
};
function modulo(a,b){
    return a%b;
}
export default function multiplication(a,b=1,c=1){
    return a*b*c;
}
export{
    add,student,modulo
}