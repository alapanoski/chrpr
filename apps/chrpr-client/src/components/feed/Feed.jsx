import React, { useEffect, useState } from 'react'

import { getFeed } from '../../services/FeedService'

import Chrp from './Chrp/Chrp'

import './Feed.scss'

export default function Feed() {
  const [chrps, setChrps] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFeed()
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setChrps(data)
        setLoading(false)
      })
  }, [])

  return (
    <div id="feed">
      {loading ? (
        <div className="feed-loading">
          <p>Please wait while we load your chrps...</p>
        </div>
      ) : null}
      {chrps.map((chrp) => (
        <Chrp chrp={chrp} key={chrp.id} />
      ))}
    </div>
  )
}
