import { useState } from 'react'
import './index.css'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container></Container>
    </>
  )
}

function Navbar(){
  return(
    <nav>
        <div className="title">CV Generator</div>
    </nav>
  )
}
let x = {}
function Container(){
  const [user, setUser] = useState({
    userName: 'Pablo Porta Tuimil',
    email: 'pabloportatuimil12@gmail.com',
    location:'Ferrol, Rúa Real',
    phone:'644 58 24 12',
    link:'https://github.com/portaTuimil',
    shortDesc:'A Junior Software Dev',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
        ...prevState,
        [name]: value
    }));
    x = user;
  };

  return(
    <div className="container">
      <div className="left-container">
      <div className="panel" id='panel1'>
        - Personal Data
      </div>
        <form action="">
            <label>Name: </label> <input type="text"  value={user.userName} name='userName' onChange={handleChange}/><br></br><br></br>
            <label>Email: </label> <input type="text"  value={user.email} name='email' onChange={handleChange}/> <br></br><br></br>
            <label>Location: </label> <input type="text"  value={user.location} name='location' onChange={handleChange}/><br></br><br></br>
            <label>Phone Nº: </label> <input type="text"  value={user.phone} name='location' onChange={handleChange}/><br></br><br></br>
            <label>Link: </label> <input type="text"  value={user.link} name='link' onChange={handleChange}/><br></br><br></br>
            <label>Short Desc.: </label> <input type="text"  value={user.shortDesc} name='shortDesc' onChange={handleChange}/><br></br><br></br>
        </form>
      </div>
      <CurriculumVitae {...user}></CurriculumVitae>
    </div>)
}

function CurriculumVitae(user){
  
  return(
      <div className="right-container">
        <div className="presentation">
          <div>
          <h2 className='name'>{user.userName}</h2>
          <h3 className='shortDesc'>{user.shortDesc}</h3>
          </div>
          <ul className='list'>
            <li><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>{user.email}</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>{user.location}</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg> {user.phone}</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>{user.link}</li>
          </ul>
        </div>
        <div className="cvbody">
            <div className="educationTitle"><p>Education:</p></div>
        </div>
      </div>
  )
}



export default App
