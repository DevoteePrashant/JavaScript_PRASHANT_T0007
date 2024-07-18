
    



function printPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let a = 0; a < n; a++) {
            if (i == Math.floor(n / 2) || a == Math.floor(n / 2 )) {
                row += "+";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}

printPattern(9);

    