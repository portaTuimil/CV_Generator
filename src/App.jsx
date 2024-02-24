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
            <div className="education">{user.education}</div>
            <div className="educationTitle"><p>Experience:</p></div>
            <div className="education">{user.experience}</div>
        </div>
      </div>
  )
}

//Container
function Container(){
  const [selected, setSelected] = useState('first');

  const [user, setUser] = useState({
    userName: 'Someone',
    email: 'example@gmail.com',
    location:'Spain',
    phone:'123 45 67 89',
    link:'https://github.com/portaTuimil',
    shortDesc:'A Junior Software Dev',
    education:'',
    experience:''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  //First Page
  if(selected === 'first'){
    return(
      <div className="container">
        <div className="left-container">
          <div className="iconSelector">
            <button onClick={() => setSelected('first')} style={{ background: 'grey', borderRadius: '10px'}}><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg></button>
            <button onClick={() => setSelected('second')}><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg></button>
            <button onClick={() => setSelected('third')}><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/></svg></button>
          </div>
        <div className="panel">
          - Personal Data:
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
      </div>
    )
  //Second Page
  }else if(selected === 'second'){
    return(
      <div className="container">
        <div className="left-container">
          <div className="iconSelector">
            <button onClick={() => setSelected('first')}><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg></button>
            <button onClick={() => setSelected('second')} style={{ background: 'grey', borderRadius: '10px'}}><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg></button>
            <button onClick={() => setSelected('third')}><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/></svg></button>
          </div>
          <div className="panel">
          - Education:
          </div>
          <form action="">
              <label>Education: </label> <textarea name="education" value={user.education} onChange={handleChange}></textarea><br></br><br></br>
          </form>
        </div>
        <CurriculumVitae {...user}></CurriculumVitae>
      </div>
      )
  //Third Page    
  }else if(selected === 'third'){
    return(
      <div className="container">
        <div className="left-container">
          <div className="iconSelector">
            <button onClick={() => setSelected('first')}><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg></button>
            <button onClick={() => setSelected('second')}><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg></button>
            <button onClick={() => setSelected('third')} style={{ background: 'grey', borderRadius: '10px'}}><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/></svg></button>
          </div>
          <div className="panel">
          - Experience:
          </div>
          <form action="">
              <label>Experience: </label> <textarea name="experience" value={user.experience} onChange={handleChange}></textarea><br></br><br></br>
          </form>
        </div>
        <CurriculumVitae {...user}></CurriculumVitae>
      </div>
      ) 
  }
}

export default App
