import React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import './Chrp.scss'

export default function Chrp(props) {
  return (
    <Card className="chrp">
      <Card.Body>
        <Card.Header className="chrp-header">
          <Card.Text className="chrp-header-displayname">
            {props.chrp.display_name}
          </Card.Text>
          <Card.Text className="chrp-header-username">
            @{props.chrp.username}
          </Card.Text>
          <Card.Text className="chrp-header-date">
            {new Date(props.chrp.date).toLocaleString()}
          </Card.Text>
        </Card.Header>
        <Card.Text className="chrp-message">{props.chrp.message}</Card.Text>
        <Card.Footer className="chrp-footer">
          <Button className="chrp-footer-like">♡ 11K</Button>
          <Button className="chrp-footer-comment">💬3K</Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}
