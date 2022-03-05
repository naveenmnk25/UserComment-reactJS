import React from 'react'
import ReactDOM from 'react-dom'
import SingleComment from './SingleComment'
import profile01 from './images/one.jpg'
import profile02 from './images/two.jpg'
import profile03 from './images/three.jpg'
import UserCard from  './userCard'

const First =()=>{
  
  return(
    <div className='ui comments'>
      <UserCard>
          <SingleComment name='Nazriya' time='3pm'   profile={profile01} message='Good' />
        </UserCard>
        <UserCard>
        <SingleComment name='Naveen'  time='5.30pm'profile={profile02} message='Nice'  />   

          </UserCard>  
        <UserCard>
        <SingleComment name='Kumar'   time='6pm'   profile={profile03} message='Very Good' />

          </UserCard>  
      

     </div>
  )
}

ReactDOM.render(
  <First />,
  document.querySelector('#root')
)



























/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/