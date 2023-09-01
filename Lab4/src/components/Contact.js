import React from 'react'
import { Container, TextInput, Select, Button, Textarea, Section, Icon,Checkbox,  Row, Col } from 'react-materialize'
export default function Contact() {
  const handleSubmit =(e)=>{
    e.preventDefault()
  }
  return (
    <Section> 
     <Container>
        <h3>Contact us</h3>
      <form onSubmit={handleSubmit}>
        <TextInput  id="TextInput-38"  label="Your Name"/>
        <TextInput id="TextInput-39" label="Your Phone"/>
        <TextInput email id="TextInput-41" label="Email" validate/>
        <Select id="Select-46" multiple={false} onChange={function noRefCheck(){}} value="">
          <option disabled value="">
            Choose your favourite nation
          </option>
          <option value="1">
            USA
          </option>
          <option value="2">
            Korea
          </option>
        </Select>
        <Textarea icon={<Icon>mode_edit</Icon>} id="Textarea-28" label="Your content"/>
        <Button>Submit</Button>
      </form>
     </Container>
     </Section>
  )
}
