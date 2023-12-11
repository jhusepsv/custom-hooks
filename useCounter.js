import { useState } from "react";

export const useCounter = ( initialValue = 10 ) => {

   const [counter, setCounter] = useState( initialValue );

   const increment = () => {
      setCounter( (current) => current + 1 );
   };
   
   const decrement = () => {
      if(counter === 0) return;
      setCounter( (current) => current - 1 );
   };
   
   const reset = () => {
      setCounter( initialValue );
   };

   return {
      counter,
      increment,
      decrement,
      reset,
   };

};
