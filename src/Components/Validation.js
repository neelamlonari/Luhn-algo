import React, {useState,useEffect} from 'react'

function Validation() {
    const[num,setNum]=useState();
    const [ message,setMessage] = useState("");

    useEffect(() => {
        console.log("triggering useeffect with  dependency")
        ValidCard (num);
        },[]);
      
       const handleValidNumber=(e)=>{
        //e.preventdefault();
        setNum(e.target.value);
        console.log('evt.target.value')
       };
        
       const ValidCard = ()=>{
             if(num===''){
             console.log("Enter a  Card number");
             }else {
                let arr = (num + '')
                .split('')
                .reverse()
                .map((x) => parseInt(x));
             let lastDigit = arr.splice(0,1)[0];    
            
             if(arr % 2 ===0){
              arr.map((n , i)=> i % 2==0 ? n*2 : n) 
             console.log("This is Valid Card number");
             }else if(arr % 2 !==0)
             {
                arr.map((n , i) =>i % 2!==0 ? n*2: n)
                }else{

                 arr.map((el,i)=> el > 9 ? el-9 : el)
                console.log("This is valid card number");
                }
              let sum = arr.reduce(
                (acc,val,i) => (i % 2 !==0 ? acc + val: acc + ((val*2) % 9) || 9),
              0   );
              sum += lastDigit;

              if(sum% 10 ===0){
                setMessage('Valid Credit Card Number');
              }else{
                setMessage('Enter valid CreditCard Number');
                console.log('Invalid');
              }

        }
    };
  return (
    <>
    <form className='formDiv'>
    <input 
      type="text"
      placeholder='Enter card number here'
      onChange={handleValidNumber}
      value={num} />
     <h3 className="msg">{message}</h3>
     </form>
    </>
  )
}

export default Validation