

import './css/app.css';


import React, { Component, memo, useCallback, useContext, useEffect, useMemo, useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';

import Navigation from './components/navigation';
import Parallex from './components/parallex';
import Features from './components/features';
import Googlemaps from './components/googlemaps';
import Footer from './components/footer';
import About from './components/about';
import { pathContext } from './context/pathContext';
import Menu from './components/menus';
import Contact from './components/contact';












function App(props) {
  const [page, setPage] = useState(true);

  return (
    <pathContext.Provider value={page, setPage}>

      <Router>
        <Switch>
          <Route exact path="/">
            <div className="main">
              <Navigation />
              <Parallex />
              <Features />
              <Googlemaps />
              <Footer />
            </div>
          </Route>
          <Route path="/about"><About /></Route>
          <Route path="/menu" ><Menu /></Route>
          <Route path="/contact" ><Contact /></Route>
        </Switch>

      </Router>
    </pathContext.Provider>



  )


}

export default App;










/* function render(data) {
  return (
    <div>
    {data && data.map(person => person.firstName)}
    {!data && "loading..."}

  </div>

)
}


/* const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState(21);

  const arr = [1, 2, 3];

  const memoized = useMemo(() => arr, []);
  const callback = useCallback(() => arr, []); */

/* <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        alert("I've been clicked...")
      }}>
        <label>name</label>
        <input type="text" onChange={(e) => setText(e.target.value)} placeholder="name" />
        <h3>{`watch me change:${text}`}</h3>
        <button type="submit" >click</button>
      </form>
    </div> */




/* function hoc(Component) {
  return function () {

    const [state, setState] = useState();

    useEffect(() => {
      setTimeout(async () => {
        const req = await fetch("http://localhost:8000/persons");
        const res = await req.json();

        setState(res);
      }, 1000)
    }, [])
    return (
      <Component data={state} />
    )
  }
} */




/* const RenderComponent = ({ render }) => {
  const [state, setState] = useState();

  useEffect(() => {
    setTimeout(async () => {
      const req = await fetch("http://localhost:8000/persons");
      const res = await req.json();

      setState(res);
    }, 1000)
  }, [])
  return (
    <div>
      {render(state)}
    </div>
  )
}
*/


/*  <div className="form-wrapper">

     <form method="post" className="form" onSubmit={(e) => {
       e.preventDefault();

       alert(`My name is ${name}. My email is ${email}.My password is ${password}`)
     }}>
       <BasicComponent arrayLength={callback()} />
       <label>Name</label>
       <input
         type="text"
         placeholder="name"
         onChange={(e) => setName(e.target.value)}
       />
       <label>Email</label>
       <input
         type="text"
         placeholder="email"
         onChange={(e) => setEmail(e.target.value)}
       />
       <label>Password</label>
       <input
         type="text"
         placeholder="password"
         onChange={(e) => setPassword(e.target.value)}
       />
       <label>Age</label>
       <input
         type="number"
         placeholder="password"
         onChange={(e) => setAge(parseInt(e.target.value))}
         value={age}
       />
       <button type="submit">Press</button>
       <h3>{` name state:${name}`}</h3>
       <h3>{` email state:${email}`}</h3>
       <h3>{` password state:${password}`}</h3>
       <h3>{` age state:${age}`}</h3>
     </form>
   </div> */


