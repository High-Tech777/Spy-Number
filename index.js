function checkSpyNumber() {
    let inputValue=Number(document.getElementById("number").value);
    
    let sum=0;
    let times=1;
    while(inputValue>0) {
        const digit=inputValue%10;
        sum+=digit;
        times*=digit;
        inputValue=Math.floor(inputValue/10);
    }
    document.getElementById("result").textContent = sum===times ? "Spy Number" : "Invalid Spy Number";
}
