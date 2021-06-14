

import { connect } from 'react-redux'
import React, { useState } from 'react'
import { addUser} from '../redux/action/actionUser'

const mapDispatchToProps = (dispatch) => ({

    addUser: (newUser) => dispatch(addUser(newUser)),
    
})



export default connect(null,mapDispatchToProps)(function Form(props) {
   const {addUser}=props
   const [name,setName]=useState('')
   const [age,setAge]=useState('')
   const [city,setCity]=useState('')
   const [email,seteEmail]=useState('')
   const [phone,setePhone]=useState('')
  
    return(
        <div>
            <div>
            <div>
                <label>Name</label>
                <input  value={name}
                onChange={(e)=>setName(e.target.value)}
                ></input>
                 
            </div>
            <div>
                <label>Age</label>
                <input value={age}
               
                    onChange={e => setAge(e.target.value)}
                ></input>
            </div>
            <div>
                <label>City</label>
                <input value={city}
               
                    onChange={e => setCity(e.target.value)}
                ></input>
            </div>
            <div>
                <label>Email</label>
                <input value={email}
               
                    onChange={e => seteEmail(e.target.value)}
                ></input>
            </div>
            <div>
                <label>Phone</label>
                <input value={phone}
               
                    onChange={e => setePhone(e.target.value)}
                ></input>
            </div>
            <button onClick={()=>addUser({name:name,age:age,city:city,email:email,phone:phone})}>add</button>
          
       
        </div> 
        </div>
    )

}
)
