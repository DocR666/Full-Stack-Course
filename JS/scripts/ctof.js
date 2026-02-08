function convertTemperature(){
    let celsiusTemperature = Number(document.getElementById("celsiusInput").value);
    let fahrenheitTemperature = (celsiusTemperature*(9/5))+32;

    document.getElementById("result").innerHTML=fahrenheitTemperature;
}