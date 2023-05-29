import React from 'react'
{/* insertion de nos composants boostrap */}
import Form from "react-bootstrap/Form"
import  Button  from 'react-bootstrap/Button'
{/*insertion de notre fichier stylesheet */}
import './formulo.css'
{/* function Formulo */}
const Formulo = () => {
  return (
    <div>
        <Form className='formulo'>
<div className='name1'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
{/* création du formulaire à l'aide du composant Formdu boostrap */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      </div>
      {/* création du buttonà l'aide du composant button du boostrap */}
      <div className='btn'><Button variant="primary" type="submit">
        Submit
      </Button></div>
    </Form>
      
    </div>
  )
}

export default Formulo
