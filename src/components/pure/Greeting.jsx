import React from 'react';
import { Contact } from '../../models';
import GreetingStyled from './GreetingStyled';

const Greeting = () => {
  const contactData = new Contact("juan","abarca","ju.abarca@gmail.com",true); 
  return (
    <> 
      <GreetingStyled contact={contactData} />
    </>
  )
}

export default Greeting