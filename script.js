const calculatorScreen =document.querySelector('.calculator-screen')

const updateScreen=(number)=>{
    calculatorScreen.value=number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
         console.log(event.target.value)
    })
})

let prevInput='0'
let calculationOperator=''
let currentInput='0'

const inputNumber=(number)=>{
    if(currentInput==='0'){
    currentInput=number
    } else{
        currentInput+=number;
    }
    
}
numbers.forEach((number)=>{
    number.addEventListener(("click"), (event)=>{
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})


const inputOperator=(operator)=>{
    prevInput=currentInput
    calculationOperator=operator
    currentInput='0'
  
}
const operators = document.querySelectorAll(".operator")

operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value)  
        updateScreen(calculationOperator)
    })
})

 function calculate(){
    let result=0
    switch(calculationOperator){
             case '+':
            result=parseFloat(prevInput)+parseFloat(currentInput)
            break
            case '-':
            result=parseFloat(prevInput)-parseFloat(currentInput)
            break
           case '*':
            result=parseFloat(prevInput)*parseFloat(currentInput)
            break
            case '/':
            result=parseFloat(prevInput)/parseFloat(currentInput)
            break
            default:
                return
         }
    currentInput=result.toString() 
    console.log(calculationOperator)
    calculationOperator=''
}
const equalSign=document.querySelector('.equal-sign')
equalSign.addEventListener("click",()=>{
    calculate()
    updateScreen(currentInput)
   })

   function calp(){
       let res=0;
       res=parseFloat(currentInput/100);
       updateScreen(res);
   }

   const percent=document.querySelector('.percentage')
   percent.addEventListener("click",()=>{
       calp()
   })

  function inputdec(){
     currentInput+=".";
     updateScreen(currentInput);
}


  const dec=document.querySelector('.decimal')
  dec.addEventListener('click',()=>{
    inputdec()
  }) 
   

const clearBtn=document.querySelector('.all-clear')
clearBtn.addEventListener("click",()=>{
    console.log("AC button is pressed")
})


const clearAll=()=>{
    prevInput='0'
    calculationOperator=''
    currentInput='0'
}

clearBtn.addEventListener("click",()=>{
    clearAll()
    updateScreen(currentInput)
})

