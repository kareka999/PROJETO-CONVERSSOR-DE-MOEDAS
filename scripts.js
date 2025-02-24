const convertButton = document.querySelector(".convert-button")
const  currencySelect = document.querySelector(".currency-select")
       


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moesdas

    const dolarToday = 6.1
    const euroToday = 6.8
    const bitcoinToday = 8.5
    const libraToday = 9.5


    

if(currencySelect.value == "dolar" ){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)

}

if(currencySelect.value == "euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)

}

if(currencySelect.value == "bitcoin"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday)

}

if(currencySelect.value == "libra"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue /libraToday )

}


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue)

}


function changeCurrency(){
    const currencyName = document.querySelector("#currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = ("dolar americano")
        currencyImage.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = ("euro")
        currencyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = ("bitcoin")
        currencyImage.src = "./assets/bitcoin.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = ("libra")
        currencyImage.src = "./assets/libra.png"
    }
    


    convertValues()
    
    
}

currencySelect.addEventListener("change",changeCurrency )
convertButton.addEventListener("click",convertValues)
