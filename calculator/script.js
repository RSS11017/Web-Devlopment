const d = document.getElementById('display');
const b = document.querySelectorAll('button');
let ci = '0';
let op = '';
let pi = null;

function ud(v) {
    d.textContent = v;
}

function nc(n) {
    if (ci === '0') {
        ci = n;
    } else {
        ci += n;
    }
    ud(ci);
}

function oc(o) {
    if (pi !== null) {
        calc();
    }
    op = o;
    pi = ci;
    ci = '0';
}

function calc() {
    if (pi === null || ci === '0') return;

    let r;
    const p = parseFloat(pi);
    const c = parseFloat(ci);

    switch (op) {
        case '+':
            r = p + c;
            break;
        case '-':
            r = p - c;
            break;
        case '*':
            r = p * c;
            break;
        case '/':
            if (c === 0) {
                r = 'Error';
            } else {
                r = p / c;
            }
            break;
        default:
            return;
    }

    ci = r.toString();
    op = '';
    pi = null;
    ud(ci);
}

function cl() {
    ci = '0';
    pi = null;
    op = '';
    ud(ci);
}

function per() {
    if (ci !== '0') {
        ci = (parseFloat(ci) / 100).toString();
        ud(ci);
    }
}

function ts() {
    if (ci !== '0') {
        ci = (parseFloat(ci) * -1).toString();
        ud(ci);
    }
}

b.forEach(btn => {
    btn.addEventListener('click', () => {
        const t = btn.textContent.trim();

        if (t === 'C') {
            cl();
        } else if (t === '+/-') {
            ts();
        } else if (t === '%') {
            per();
        } else if (t === '=') {
            calc();
        } else if (['+', '-', '*', '/'].includes(t)) {
            oc(t);
        } else {
            nc(t);
        }
    });
});
