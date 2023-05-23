function factorial(x) {
    if (x == 0) {
        return 0;
    }
    else if (x == 1) {
        return 1;
    }
    // else if(x<0){
    //     return "error";
    // }
    return x * factorial(x - 1);
}

function gcf(num1, num2) {


    // Use the Euclidean algorithm to find the GCF
    while (num2 > 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    // Return the GCF
    return num1;
}


let displaytext = "";
function click() {
    let pre = document.getElementById('pre');
    let display = document.getElementById('display');

    let buttons = document.querySelectorAll('Button');
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            let x = button.value;
            if (x == '') {
                x = button.innerText;
            }

            switch (x) {
                case 'C':
                    displaytext = "";
                    display.value = '';
                    pre.value = '';
                    break;
                case '←':
                    display.value = display.value.slice(0, display.value.length - 1);
                    break;
                case '=':
                    let y = display.value;
                    pre.value = eval(y);
                    break;
                case '!':
                    let fact=display.value;
                    if (parseInt(eval(fact)) < 0) {
                        pre.value = -factorial(Math.abs(eval(fact)));
                    }
                    else {
                        pre.value = factorial(eval(fact));
                    }
                    break;
                case '1/displaytext':
                    let inv=display.value;
                    pre.value = 1 / (eval(inv));
                    let invert = '1/';
                    invert += inv;
                    display.value = invert;
                    break;
                case '^2':
                    pre.value = Math.pow(eval(display.value), 2);
                    break;
                case '^3':
                    pre.value = Math.pow(eval(display.value), 3);
                    break;
                case '%':
                    pre.value = (1 / 100 * (display.value));
                    break;
                case 'root':
                    let root = '√';
                    let Root=display.value;
                    root += Root;
                    display.value = root;
                    pre.value = Math.sqrt(eval(Root));
                    break;
                case 'π':
                    let pi = display.value;
                    let Pi=display.value;
                    pi += 'π';
                    display.value = pi;
                    pre.value = Math.PI * (eval(Pi));
                    break;
                case 'e^x':
                    let ex = 'e^';
                    ex += display.value;
                    pre.value = Math.exp(eval(display.value));
                    display.value = ex;
                    break;
                case 'lg':
                    let l = 'lg(';
                    l += display.value;
                    l += ')';
                    pre.value = Math.log10(eval(display.value));
                    display.value = l;
                    break;
                case 'cos':
                    let cos = 'cos(';
                    cos += display.value;
                    cos += ')';
                    pre.value = Math.cos((display.value) * (Math.PI)/180);
                    display.value = cos;
                    break;
                case 'sin':
                    let sin = 'sin(';
                    sin += display.value;
                    sin += ')';
                    pre.value = Math.sin((display.value)*(Math.PI)/180);
                    display.value = sin;
                    break
                case 'tan':
                    let tan = 'tan(';
                    tan += display.value;
                    tan += ')';
                    pre.value = Math.tan((display.value) * Math.PI/180);
                    display.value = tan;
                    break;
                case 'Gcf':
                    let Dis = display.value;
                    let [num1, num2] = (Dis).split(",");
                    num1 = parseInt(num1);
                    num2 = parseInt(num2);
                    pre.value = gcf(num1, num2);
                    if (isNaN(num1) || isNaN(num2)) {
                        display.value = "Invalid input";
                    } else {
                        let Gcf = "Gcm";
                        Gcf += '(';
                        Gcf += num1;
                        Gcf += ',';
                        Gcf += num2;
                        Gcf += ')';
                        display.value = Gcf;
                    }
                    break;
                case 'Lcm':
                    let [j, k] = (display.value).split(",");
                    let A=(gcf((j), (k)));
                    pre.value = eval("j*k/A");
                    if (isNaN(num1) || isNaN(num2)) {
                        display.value = "Invalid input";
                    } else {
                        let Gcf = "Gcm";
                        Gcf += '(';
                        Gcf += j;
                        Gcf += ',';
                        Gcf += k;
                        Gcf += ')';
                        display.value = Gcf;
                    }
                    break;
                default:
                    if (x != '1/displaytext' && x != 'root' && x != 'e^x' && x != 'lg' && x != 'cos' && x != 'sin' && x != 'tan' && x != 'Gcf' && x != "Lcm") {
                        displaytext += x;
                        display.value = displaytext;
                    }
            }

        });
    });
}
click();