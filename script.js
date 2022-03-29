let aa = "30";
let bb = "69";
let res = "2830869077153280552556547081187254342445169156730";
multiply(aa, bb);

function multiply(a, b) {
    let mm = [];
    let result = [];
    for(let i = 0; i < b.length; i++){
        let perenos = 0;
        let nulls = 0;
        let mas1 = [];
        let mas = [];
        for (let j = 0; j < a.length; j++) {
            let wrem = b[b.length - i - 1] * a[a.length - j - 1];
            wrem += perenos;
            perenos = 0;
            while (wrem >= 10) {
                wrem -= 10;
                perenos += 1;
            }
            mas.push(wrem);
            if(j == a.length - 1){
                mas.push(perenos);
            }
        }
        for(let k = 0; k <= a.length + 1; k++){
            mas1.push(mas[mas.length - k]);
        }
        let tt = mas1.join('');
        mm.push(tt);
    }
    perenos = 0;
    let str = '';
    for(let i = b.length - 1; i >= 0; i--){
        mm[i] = str + mm[i];
        str += '0';
    }
    let str1 = '';
    for(let i = 0; i < b.length; i++){
        mm[i] = mm[i] + str1;
        str1 += '0';
    }
    console.log(mm);
    perenos = 0;
    for(let i = a.length + b.length - 1; i >= 0; i--){
        let wrem = 0;
        wrem += perenos;
        perenos = 0;
        for(let j = 0; j < b.length; j++){
            wrem += parseFloat(mm[j][i]);
        }
        while (wrem >= 10) {
            wrem -= 10;
            perenos += 1;
        }
        result.push(wrem);
        console.log(result);
        if(i == 0){
            result.push(perenos);
        }
    }
    let Endsieg = [];
    let s = true;
    for(let i = result.length - 1;i >= 0; i--){
        if(result[i] == 0 && s == true&& i !=0){}
        else
        {
            Endsieg.push(result[i]);
            s = false;
        }
    }
    let EndsiegString = Endsieg.join('');
    console.log(Endsieg);
    return EndsiegString;
}