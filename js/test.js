const result = document.getElementById('result');

function display(val) {

    // document.getElementById('result').value += val
    result.value += val;
    return val


}
function fe_btn(){
    result.value=Number(result.value).toExponential();

}
let on =false;
function showrows(){
 on=true;
console.log(on);
    if(on==true){
        document.getElementById("x_squre").style.display= "none";
        // document.getElementById("sqrt").style.display= "none";
        // document.getElementById("**").style.display= "none";
        // document.getElementById("10squre").style.display= "none";
        // document.getElementById("log").style.display= "none";
        // document.getElementById("in").style.display= "none";
        let test=document.getElementById("test").style.display= "";
        console.log(test);
    }
    // else{
    //     document.getElementById("x_squre").style.display= "block";
    //     document.getElementById("sqrt").style.display= "block";
    //     document.getElementById("**").style.display= "block";
    //     document.getElementById("10squre").style.display= "block";
    //     document.getElementById("log").style.display= "block";
    //     document.getElementById("in").style.display= "block";
    // }




}
function clearScreen() {

    document.getElementById('result').value = ''

}
function solve() {

    let x = document.getElementById('result').value
    let y = eval(x);

    document.getElementById('result').value = y

    return y


}
function backspace() {
    document.getElementById('result').value = result.value.slice(0, -1);
}



function mathfun(math_obj) {
    let z = result.value;
    let ans;

    switch (math_obj) {
        case 'log':
            ans = Math.log10(z);
            break;
        case 'in':
            ans = Math.log(z);
            break;
        case 'exp':
            ans = z.toExponential();
            break;
        case 'pi':
            ans = Math.PI;
            break;
        case 'e':
            ans = Math.E; ////////////errror 
            break;
        case 'sqrt':
            ans = Math.sqrt(z);
            break;
        case 'x_squre':
            ans = Math.pow(z, 2);
            break;

        case '10squre':
            ans = Math.pow(10, z);
            break;

        case 'fact':
            let factorial = (number) => {
                let temp = 1;
                for (let i = 2; i <= number; i++) {
                    temp = temp * i;
                }
                return temp;
            }
            ans = factorial(z);
            break;
        case 'one&half':
            ans = 1 / z;
            break;

        // function dropdown 
        case '|x|':
            ans = Math.abs(z);
            break;
        case 'rand':
            ans = Math.random();
            break;
        case 'ceil':
            ans = Math.ceil(z);
            break;
        case 'floor':
            ans = Math.floor(z);
            break;

        // Trigonometry drop down 

        case 'sin':
            ans = Math.sin(z);
            break;
        case 'cos':
            ans = Math.cos(z);
            break;
        case 'tan':
            ans = Math.tan(z);
            break;

        case 'hyp':
            ans = Math.hypot(z);
            break;
        case 'sec':
            ans = 1 / Math.cos(z);
            break;

        case 'csc':
            ans = 1 / Math.sin(z);
            break;
        case 'cot':
            ans = 1 / Math.tan(z);
            break;

        default:
            return 0;
    }
    document.getElementById('result').value = ans
    return ans;
}