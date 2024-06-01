import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <Row>
      <Col lg={1}>
        <img className="profile" width={50}
              src="https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze"
            />
      </Col>
      <Col lg={11}>
        <div>
          {item.name}
        </div>
        <div>
        {item.phoneNumber}
        </div>
      </Col>
    </Row>
  )
}

export default ContactItem
