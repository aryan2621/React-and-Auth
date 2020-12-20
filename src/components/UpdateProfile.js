import React,{useRef,useState} from 'react'
import {Form,Button,Card,Alert} from 'react-bootstrap'
import { Link ,useHistory} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'


export default function UpdateProfile() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef =useRef()
    const {currentUser,updateEmail,updatePassword} =useAuth()
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)
    const history=useHistory()

   function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value!==passwordConfirmRef.current.value){
            return setError('Pasword Not Matched')
        }
const promises=[]
setError('')
setLoading(true)
if(emailRef.current.value!==currentUser.email){
    promises.push(updateEmail(emailRef.current.value))
}
if(passwordRef.current.value){
    promises.push(updatePassword(passwordRef.current.value))

}
Promise.all(promises).then(()=>{
    history.push('/')
}).catch(()=>{
    setError('Failed to update the Account')
}).finally(()=>{
    setLoading(false)
})

}  


    return (
        <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-2">Update Profile</h2>
        
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required ref={emailRef}
                    defaultValue={currentUser.email}
                />

                </Form.Group>
                <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Leave blank for Same!"
                  ref={passwordRef}/>

                </Form.Group>
                <Form.Group id="password-confirm">
                <Form.Label>Password Confirm</Form.Label>
                <Form.Control type="password" placeholder="Leave blank for Same!"
                  ref={passwordConfirmRef}/>

                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">Update</Button>
            </Form>

            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
        Already have an account ? <Link to="/">Cancel</Link>

        </div>
            
        </>
    )
}
