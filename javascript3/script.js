function entranceFee(adult, child) {
    return("合計は"+( (500*adult)+(200*child) )+"円です。"+"<br>");
}
document.write(entranceFee(2,4));
document.write(entranceFee(1,5));
document.write(entranceFee(3,7));