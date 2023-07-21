import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from "../index"
import { Button, Container, HStack, Radio, RadioGroup, } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';


const Coin = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");


  const currencySymbol = currency === "inr" ? "₹" : currency === 'eur' ? "€" : "$";
  const changePage = (page) => {
    setPage(page);
    setLoading(true)
  }

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fatchCoin = async () => {

      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        setCoins(data)
       console.log(data)
        setLoading(false);
      } catch (error) {
        setError(true)
        setLoading(false);
      }
    }
    fatchCoin();
  }, [currency, page])
  if (error) {
    return <ErrorComponent />
  }

  return (
    <Container maxW={"container.lg"} >
      {loading ? (<Loader />) : (
        <>
          {/* "inr" ? "₹" : currency === 'eur' ? "€" : "$"; */}
          <RadioGroup value={currency} onChange={setCurrency}>
            <HStack spacing={"4"}>
              <Radio value={"inr"} >INR</Radio>
              <Radio value={"usd"} >USD</Radio>
              <Radio value={"eur"} >EURO</Radio>
            </HStack>
          </RadioGroup>


          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {
              coins.map((i) => (
                <CoinCard
                  id={i.id}
                  key={i.id}
                  name={i.name}
                  img={i.image}
                  price={i.current_price}
                  symbol={i.symbol}
                  currencySymbol={currencySymbol} />
              ))
            }
          </HStack>
          <HStack w={'full'} overflowX={"auto"} >
            {
              btns.map((item, index) => (
                <Button bgColor={"blackAlpha.900"} color={"white"} key={index} onClick={() => changePage(index + 1)}>{index + 1}</Button>
              ))
            }
          </HStack>

        </>)}
    </Container>
  )
}






export default Coin;
