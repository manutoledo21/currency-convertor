import axios from "axios"

const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY

const URL_BASE = 'https://api.exchangeratesapi.io/v1/'
const URL_LATEST = `${URL_BASE}latest?access_key=${API_KEY}`

export const getLatestCurrency = async () => {
  try {
    const res = await axios.get(URL_LATEST)
    const data = res.data;
    return data
  } catch (error) {
    console.error(error)
  }
}

// not working because of the free plan
export const getLatestCurrencyWithOtherBase = async (base) => {
  try {
    const res = await axios.get(`${URL_LATEST}&base=${base}`) // debe poder ser modificado por el valor que quiera el usuario
    const data = res.data;
    return data
  } catch (error) {
    console.error(error)
  }
}

// not working because of the free plan
export const getLatestCurrencyWithSymbols = async (symbols) => {
  try {
    const res = await axios.get(`${URL_LATEST}&symbols=${symbols}`) // debe poder ser modificado por el valor que quiera el usuario
    const data = res.data;
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getLatestCurrencyWithSymbolsAndBase = async (base, symbols) => {
  try {
    const res = await axios.get(`${URL_LATEST}&base=${base}&symbols=${symbols}`) // debe poder ser modificado por el valor que quiera el usuario
    const data = res.data;
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getConvertor = async (amount, from, to) => {
  try {
    const res = await axios.get(`${URL_BASE}convert?access_key=${API_KEY}&from=${from}&to=${to}&amount=${amount}`)
    const data = res.data;
    return data
  } catch (error) {
    console.error(error)
  }
}

