import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Song } from '../../types/index'
import React, { useState } from 'react'
import TunesSong from './TunesSong'

//props
interface Props {
  songs: Song[]
}
//styles
const LiStyles = {
  color: 'black',
  background: 'rgba(255, 255, 255, 0.9)',
  fontFamily: 'Combo',
  fontSize: '30px',
  textAlign: 'center',
  padding: '20px',
  border: '3px solid rgba(0, 0, 0, 0.9)',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: 'auto',
  maxWidth: '90%',
  margin: '60px auto',
  ListStyle: 'none',
  marginBottom: '20px',
} as const

// components
const TunesList: React.FC<Props> = props => {
  const { songs } = props

  //template
  return (
    <ul style={LiStyles}>
      {songs.map(song => (
        <li style={LiStyles} key={song.id}>
          <TunesSong song={song} />
        </li>
      ))}
    </ul>
  )
}

export default TunesList
