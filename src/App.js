import React,{useState}from 'react'
import './App.css';
import UsersTable from './components/UsersTable';

function App() { 
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const[list,setList] = useState([]);
  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(name,email);
    const data = {name,email}
    if(name && email){
      setList((ls) => [...ls,data]);
      setName("")
      setEmail("")
      
    }
    fetch("https://react-client-59432-default-rtdb.firebaseio.com/users.json", {
      method : 'POST',
      headers:{
        'Content-Type' : "application/json"
      },
      body : JSON.stringify(data)
    })
  }
  const users = [
    {name : "avg", email : "avg@gmail.com"}
  ]
  return (
    <div className="App">
      <h1>Welcome To Our Users Form.</h1>
      <UsersTable users = {users}/>
      <form onSubmit={handleSubmit}>
     <input name='name' placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)} />
     <input name='email' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
     <button>ADD USER</button>
     </form>
    </div>
  );
}

export default App;
