import {useForm} from 'react-hook-form'
import './App.css'

function App() {
  let counter=0;
  const {register,handleSubmit}=useForm();
  const onSubmit=(d)=>
  alert(JSON.stringify(d));
 

  return (
    <>
    <form action="" onSubmit={handleSubmit(onSubmit)}>
    <input type="text" placeholder='name'  {...register("name")}/>
     <input type="text" placeholder='age' name='age' {...register("age")} />
     <p>Render: <span>{counter++}</span></p>
     <input type="submit"  value="submit"/>
    </form>
    </>
  )
}

export default App
