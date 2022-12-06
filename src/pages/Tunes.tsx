//children
import { Song } from '../types'
import { useState } from 'react'
import TunesList from '../components/tunes/TunesList'
import TunesSearchForm from '../components/tunes/TunesSearchForm'
import axios from 'axios'

// data types
interface SongFromITunes {
  trackId: number
  artistName: string
  previewUrl: string
  artworkUrl100?: string
  trackName: string
  collectionName: string
  kind?: string
}

// Component
const Tunes: React.FC = () => {
  //state
  /*  const [title, setTitle] = useState('Tunes') */

  const [songs, setSongs] = useState([])

  //callback

  const handleSearch = (query: string) => {
    axios
      .get(`https://itunes.apple.com/search?term=${encodeURI(query)}&entity=musicTrack&limit=5`)
      .then(response => {
        let iTunesSongs = response.data.results
          .filter((song: any) => song.kind === 'song')
          .map((song: any) => extractData(song))

        setSongs(iTunesSongs)
      })
  }
  const extractData = ({
    trackId: id,
    artistName: artist,
    previewUrl: audioFile,
    artworkUrl100: artwork,
    trackName: title,
    collectionName: album,
  }: SongFromITunes) => {
    return { id, artist, audioFile, artwork, title, album } as Song
  }
  //styles
  const h1Styles = {
    color: 'white',
    fontFamily: 'Combo',
    margin: '60px auto',
    fontSize: '50px',
    padding: '20px',
    border: '1px dotted white',
    borderRadius: '65px',
    flexFlow: 'column-reverse nowrap',
    width: '50%',
    textAlign: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
  } as const

  //template
  return (
    <article>
      <h1 style={h1Styles}>TUNES</h1>
      <TunesSearchForm onSearch={handleSearch} />
      <TunesList songs={songs} />
    </article>
  )
}

export default Tunes
