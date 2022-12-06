import { debounce } from 'lodash-es'
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'

//props
interface Props {
  onSearch: (query: string) => void
}

// component
const TunesSearchForm: React.FC<Props> = props => {
  const searchInput = useRef<HTMLInputElement>(null)

  //submit form
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchForMusic()
  }

  // input element
  const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
    searchForMusic()
  }, 500)

  // search for music
  const searchForMusic = () => {
    let searchString = searchInput.current?.value
    if (searchString) props.onSearch(searchString)
  }

  //style
  const SearchWrapper = {
    position: 'relative',
    width: '50%',
    maxWidth: '75%',
    margin: 'auto',
  } as const

  const SearchStyle = {
    background: 'white',
    border: '2px solid black',
    color: 'black',
    fontFamily: 'Combo',
    fontSize: '30px',
    textAlign: 'center',
    borderRadius: '65px',
    fontWeight: 'bold',
    width: '100%',
    height: '50px',
  } as const

  const SearchIcon = {
    position: 'absolute',
    top: '80%',
    left: '30px',
    transform: 'translateY(-50%)',
    width: '60px',
    height: '60px',
    background: 'url(/image/search.jpg) no-repeat center center',
    backgroundSize: 'cover',
  } as const

  //template
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={SearchWrapper}>
          <div style={SearchIcon}></div>
          <input
            style={SearchStyle}
            autoFocus
            type='text'
            ref={searchInput}
            onChange={handleInput}
          />
        </div>
      </form>
    </div>
  )
}

export default TunesSearchForm
