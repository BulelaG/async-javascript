// to retrive the 2nd
fetch('https://api.kanye.rest/%27').then(yeezy => {
    return yeezy.json();
}).then(bars => {
   document.write(bars.quote)

}).catch((err1) => {
    console.log('wrong', err1);
});