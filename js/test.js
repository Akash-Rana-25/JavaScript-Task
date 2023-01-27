const result = document.getElementById('result');

function display(val) {

    // document.getElementById('result').value += val
    result.value += val;
    return val


}
function fe_btn(){
    result.value=Number(result.value).toExponential();

}
let on=false;
// if(on=false){
//     document.getElementById("x_squre").style.display= "block";
//     document.getElementById("sqrt").style.display= "block";
//     document.getElementById("**").style.display= "block";
//     document.getElementById("10squre").style.display= "block";
//     document.getElementById("log").style.display= "block";
//     document.getElementById("in").style.display= "block";

// }
function showrows(){
 on=true;
    if(on==true){

        document.getElementById("x_squre").style.display= "none";
        document.getElementById("sqrt").style.display= "none";
        document.getElementById("**").style.display= "none";
        document.getElementById("10squre").style.display= "none";
        document.getElementById("log").style.display= "none";
        document.getElementById("in").style.display= "none";

       document.getElementById("x3").style.display= "block";
       document.getElementById("3sqrt").style.display= "block";
       document.getElementById("y_sqrt").style.display= "block";
       document.getElementById("xcube").style.display= "block";
       document.getElementById("log_y").style.display= "block";
       document.getElementById("ecube").style.display= "block";



       document.getElementById("sin").style.display= "none";
       document.getElementById("cos").style.display= "none";
       document.getElementById("tan").style.display= "none";
       document.getElementById("sec").style.display= "none";
       document.getElementById("csc").style.display= "none";
       document.getElementById("cot").style.display= "none";

       document.getElementById("sin1").style.display= "block";
       document.getElementById("cos1").style.display= "block";
       document.getElementById("tan1").style.display= "block";
       document.getElementById("sec1").style.display= "block";
       document.getElementById("csc1").style.display= "block";
       document.getElementById("cot1").style.display= "block";



    }




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