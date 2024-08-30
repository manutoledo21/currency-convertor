// import { useEffect, useState } from "react"
// import { api } from "./api"
// import { getLatestCurrency, getLatestCurrencyWithOtherBase, } from "./api/services"
import { CurrencyConvertor } from "@/src/components/CurrencyConvertor/CurrencyConvertor"
import { MenubarComp } from "@/src/components/Menubar/Menubar"

const App = () => {

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   getLatestCurrencyWithOtherBase().then((data) => {
  //     console.log(data)
  //   })
  // }, [])

  return (
    <>
      <MenubarComp />
      <CurrencyConvertor />
    </>
  )
}

export default App
