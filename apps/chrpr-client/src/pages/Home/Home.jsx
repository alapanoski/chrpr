import React from 'react'

import './Home.scss'

import Feed from '../../components/feed/Feed'
import NewChrp from '../../components/NewChrp/NewChrp'
import UserBox from '../../components/UserBox/UserBox'

export default function Home() {
  return (
    <div id="home">
      <div id="left-pane">
        <h1>Chrpr</h1>
        <UserBox />
      </div>
      <div id="middle-pane">
        <NewChrp />
        <Feed />
      </div>
      <div id="right-pane">
        <p>More stuff here too</p>
      </div>
    </div>
  )
}
