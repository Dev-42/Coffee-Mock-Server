import CoffeeCard from '../component/CoffeeCard';
import styles from './Coffee.module.css'
import {useState} from 'react'
const Coffee = () => {
  const [coffee,setCoffee] = useState([])

  let displayCoffee = async() => {
    try{
      let res = await fetch ('http://localhost:8080/coffee')
      let data = await res.json()
      console.log(data)
      setCoffee(data)
    }catch(e){
      console.log(e)
    }
  }
  return (
    <div>
      {/* Create Button `Get Coffee` here */}
      <button className={styles.button} onClick={displayCoffee}>Get Coffee</button>

      <div className={styles.mainContainer}>
        {/* Populate coffee data inside CoffeeCard.jsx */}
        {coffee.map((item)=>(
          <CoffeeCard key = {item.id} props = {item}/>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
