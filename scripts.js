const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")



 function convertValues(){
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
  const currencyValueConverted = document.querySelector(".currency-value") //outras moedas
  

  const euroToday = 6.4
  const dolarToday = 6.1
  const libraToday = 7.7
  const bitcoinToday = 570.00
  


if(currencySelect.value == "dolar") {
  currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "USD"
  }).format(inputCurrencyValue / dolarToday)

}


if(currencySelect.value == "euro") {
  currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
    style: "currency",
    currency: "EUR"
  }).format(inputCurrencyValue/euroToday)

}


if(currencySelect.value == "bitcoin") {
  currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "BTC",
    minimumFractionDigits: 8,
    maximumFractionDigits: 8
  }).format(inputCurrencyValue / bitcoinToday)

}


if(currencySelect.value == "libra") {
  currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
    style: "currency",
    currency: "GBP"
  }).format(inputCurrencyValue / libraToday)

}


 currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)


}

function changeCurrency(){
  const currencyName= document.getElementById("currency-name")
  const currencyImg =document.querySelector(".currency-img")

  if(currencySelect.value == "dolar"){
    currencyName.innerHTML= "dolar americano"
    currencyImg.src = "./assets/dolar.png"

  }

  if(currencySelect.value == "euro"){
    currencyName.innerHTML= "euro"
    currencyImg.src = "./assets/euro.png"

  }

  if(currencySelect.value == "libra"){
    currencyName.innerHTML= "libra"
    currencyImg.src = "./assets/libra.png"

  }

  if(currencySelect.value == "bitcoin"){
    currencyName.innerHTML= "bitcoin"
    currencyImg.src = "./assets/bitcoin.png"

  }

  convertValues()
  
}


convertButton.addEventListener ("click", convertValues)
currencySelect.addEventListener("change",changeCurrency)
