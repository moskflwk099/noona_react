import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {

  // store 에 등록한 reducer 의 값이다. 
  // store 생성시 작업지시서(reducer) 를 등록했다. 
  // 그러니깐 state 는 reducer.js 의 initialState 가 되고, contactList 는 initialState 의 contactList 가 된다.
  const contactList = useSelector((state)=>state.contactList);

  return (
    <div>
      
      <SearchBox />
      {
        contactList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))
      }
    </div>
  )
}

export default ContactList
