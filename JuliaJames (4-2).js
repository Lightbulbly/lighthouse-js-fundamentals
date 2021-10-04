var num = 99;
while (num >= 1) {
    let y = num - 1;
    
    if (num === 2) {
        console.log(num + " bottles of juice on the wall! " +
            num + " bottles of juice! Take one down, pass it around... " +
            y + " bottle of juice on the wall!");
    }
    else if (num === 1) {
        console.log(num + " bottle of juice on the wall! " +
            num + " bottle of juice! Take one down, pass it around... " +
            y + " bottles of juice on the wall!");
    }
    else { 
    console.log(num + " bottles of juice on the wall! " +
        num + " bottles of juice! Take one down, pass it around... " +
        y + " bottles of juice on the wall!");
}

num = num - 1;
}
