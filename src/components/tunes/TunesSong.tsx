import { Song } from '../../types'
import React from 'react'
// styles
const songStyles = {
  color: '#262626;',
  position: 'relative',
  background: 'white',
  fontFamily: 'Combo',
  fontSize: '30px',
  textAlign: 'left',
  borderRadius: '15px 15px 1em 1em',
  border: '1px solid rgba(0, 0, 0, 0.9)',
  boxSizing: 'border-box',
  maxWidth: '24em',
  margin: '0 auto 2em',
} as const
const insideStyles = {
  padding: '1.35em 1.75em 1.75em',
} as const
const h2Styles = {
  fontSize: 'inherit',
  lineHeight: '1.5em',
  margin: 0,
} as const
const playerStyles = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '1.5em',
} as const
const imgStyles = {
  width: '5em',
  border: '3px solid grey',
  borderRadius: '0.5em',
} as const
const audioStyles = {
  outline: 'none',
  maxWidth: '14em',
  border: '3px solid grey',
  borderRadius: '0.5em',
  marginLeft: '1em',
} as const
const metaStyles = {
  fontSize: '0.75em',
  fontWeight: '800',
  lineHeight: '1.5',
  color: 'white',
  padding: '1.5em 2.25em',
  background: 'rgba(0, 0, 0, 0.9)',
  borderBottomLeftRadius: '1em',
  borderBottomRightRadius: '1em',
}

// props
interface Props {
  song: Song
}
// component
const TunesSong: React.FC<Props> = props => {
  const { song } = props

  // template
  return (
    <article style={songStyles} className='song'>
      <div style={insideStyles} className='inside'>
        <h2 style={h2Styles}>{song.artist + ' - ' + song.title}</h2>
        <div style={playerStyles} className='player'>
          {song.artwork && <img style={imgStyles} src='song.artwork' alt='album art' />}
          <audio style={audioStyles} controls src={song.audioFile} />
        </div>
      </div>
      <footer style={metaStyles} className='meta'>
        {song.album}
      </footer>
    </article>
  )
}

export default TunesSong
