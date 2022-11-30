import './App.css';
import { useState , useEffect } from 'react'

function App() {

  const [id,setId] = useState(0)
  const [user,setUser] = useState([])

  const fetchData = async () => {

    const data = await fetch("https://reqres.in/api/users")

    const response = await data.json()

    console.log(response.data)

    // console.log(response.data)
  }

  const handleSubmit = async(id) => {
    console.log(id)

    if(id>0 && id<=10){
      const userData = await fetch(`https://reqres.in/api/users/${id}`)

      const resp = await userData.json()
  
      setUser(resp.data)
      console.log(user)
      
      // console.log(resp.data)
    }else{
      alert("Id is not valid")
    }

  }
  
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="App">
      <input placeholder="Enter id" onChange={(e)=> setId(e.target.value)}/>
      <button onClick={()=>{handleSubmit(id)}}>Submit</button>
{/* 
      {user.map(elem => {

        <h1>{elem.first_name}</h1>

      })} */}

    </div>
  );
}

export default App;
