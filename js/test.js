const result = document.getElementById('result');
let memory = [];
if (memory.length == 0) {
    document.getElementById("mr").disabled = true;
    document.getElementById("mc").disabled = true;

}
function display(val) {
    result.value += val;

    // console.log(val);
    //     if (val ==0 ) {
    //         document.getElementById("c").style.display = "none";
    //         document.getElementById("ce").style.display = "block";
    //     } else {
    //         document.getElementById("ce").style.display = "none";
    //         document.getElementById("c").style.display = "block";
    //     }
    return val


}

function fe_btn() {
    result.value = Number(result.value).toExponential();

}
function memoryFunction(opration) {

    document.getElementById("mr").disabled = false;
    document.getElementById("mc").disabled = false;

    let num = result.value;
    let ans1 = 0;
    switch (opration) {

        case 'ms':
            memory.push(num);
            console.log(memory);
            break;
        case 'mc':
            memory = [];
            console.log(memory);
            break;

        case 'mr':
            ans1 = memory.pop();
            console.log(memory);
            break;

        case 'm_plus':
            if (memory.length == 0) {
                memory.push(num);
                clearScreen();
                // console.log(memory);
            } else {
                let a;
                a = Number(num) + Number(memory[memory.length - 1]);
                console.log(a);
                console.log(memory);
            }

            break;
        case 'm_minus':
            if (memory.length == 0) {
                memory.push(num);
                clearScreen();
                // console.log(memory);
            } else {
                let a;
                a = Number(num) - Number(memory[memory.length - 1]);
                console.log(a);
                console.log(memory);
            }
            break;

        default:
            return 0;
    }
    document.getElementById('result').value = ans1
    return ans1;
}




let on = 1;
function showrows() {
    on++;
    if (on % 2 == 0) {
        document.getElementById("x_squre").style.display = "none";
        document.getElementById("sqrt").style.display = "none";
        document.getElementById("**").style.display = "none";
        document.getElementById("10squre").style.display = "none";
        // document.getElementById("log").style.display = "none";
        document.getElementById("in").style.display = "none";

        document.getElementById("x3").style.display = "block";
        document.getElementById("3sqrt").style.display = "block";
        document.getElementById("y_sqrt").style.display = "block";
        document.getElementById("xcube").style.display = "block";
        // document.getElementById("log_y").style.display = "block";
        document.getElementById("ecube").style.display = "block";



        document.getElementById("sin").style.display = "none";
        document.getElementById("cos").style.display = "none";
        document.getElementById("tan").style.display = "none";
        document.getElementById("sec").style.display = "none";
        document.getElementById("csc").style.display = "none";
        document.getElementById("cot").style.display = "none";

        document.getElementById("sin1").style.display = "block";
        document.getElementById("cos1").style.display = "block";
        document.getElementById("tan1").style.display = "block";
        document.getElementById("sec1").style.display = "block";
        document.getElementById("csc1").style.display = "block";
        document.getElementById("cot1").style.display = "block";
    } else {
        document.getElementById("x_squre").style.display = "block";
        document.getElementById("sqrt").style.display = "block";
        document.getElementById("**").style.display = "block";
        document.getElementById("10squre").style.display = "block";
        // document.getElementById("log").style.display = "block";
        document.getElementById("in").style.display = "block";

        document.getElementById("x3").style.display = "none";
        document.getElementById("3sqrt").style.display = "none";
        document.getElementById("y_sqrt").style.display = "none";
        document.getElementById("xcube").style.display = "none";
        // document.getElementById("log_y").style.display = "none";
        document.getElementById("ecube").style.display = "none";



        document.getElementById("sin").style.display = "block";
        document.getElementById("cos").style.display = "block";
        document.getElementById("tan").style.display = "block";
        document.getElementById("sec").style.display = "block";
        document.getElementById("csc").style.display = "block";
        document.getElementById("cot").style.display = "block";

        document.getElementById("sin1").style.display = "none";
        document.getElementById("cos1").style.display = "none";
        document.getElementById("tan1").style.display = "none";
        document.getElementById("sec1").style.display = "none";
        document.getElementById("csc1").style.display = "none";
        document.getElementById("cot1").style.display = "none";
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
            ans = Math.E;
            break;
        case 'sqrt':
            ans = Math.sqrt(z);
            break;
        case 'x_squre':
            ans = Math.pow(z, 2);
            break;

        case 'x3':
            ans = Math.pow(z, 3);
            break;

        case '10squre':
            ans = Math.pow(10, z);
            break;
        case 'xcube':
            ans = Math.pow(2, z);
            break;
        case 'ecube':
            let e;
            e = Math.E;
            ans = Math.pow(e, z);
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
        case 'plus_or_minus':
            ans = z * -1;
            break;
        default:
            return 0;
    }
    document.getElementById('result').value = ans
    return ans;
}