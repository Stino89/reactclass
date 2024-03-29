import { useState } from "react";
import Counter from "./Components/Counter";
import Greeting from "./Components/Greeting";

function App() {
  const [userData, setUserData] = useState(null)

  const fetchData = async () => {
    const response = await fetch('https://api.github.com/users/Stino89')
    const data = await response.json()
    console.log(data)
    setUserData(data)
  }
  const clear = () => {
    setUserData(null)
  }

  const display = userData && (
    <div>
      <p>{userData.login}</p>
      <img src={userData.avatar_url} alt="avatar" />
      <p><a href={userData.html_url} target="blank">Profile</a></p>
    </div>
  )
  
  
      const people = ['nick', 'omar', 'emily', 'anthony']
    const greetings = people.map((person, i ) => {
      return <Greeting key={i} name={person} />
    })
    return (
      <div>
        <h1>My Application</h1>
        <Counter />
     <button onClick={fetchData}> Get Data</button>
     <button onClick={clear}>Clear Screen</button>
     {display}
     {greetings}

    </div>  
  );
}

export default App;