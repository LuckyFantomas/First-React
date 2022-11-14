import React from 'react'
import logo1 from '../components/react.jpg'
import logo2 from '../components/html.jpg'
import logo3 from '../components/css.jpg'
import logo4 from '../components/javascript.jpg'

/* LOGOS in HOME page */
const ImgGallery = (props: { background: string }) => {
  const ImgGalleryStyles = {
    position: 'relative',
    width: '100%',
    height: '200px',
    borderRadius: '50%',
    border: '3px solid red',
    background: props.background,
    backgroundSize: 'cover',
  } as const

  return <div style={ImgGalleryStyles}></div>
}

const Logos = () => {
  const LogosStyles = {
    position: 'relative',
    width: '100%',
    maxWidth: '850px',
    height: '150px',
    margin: 'auto',
    marginTop: '200px',
    backgroundSize: 'cover',
    border: '1px solid white',
    marginBottom: '200px',
    display: 'flex',
    justifyContent: 'space-between',
  } as const

  return (
    <div style={LogosStyles}>
      <ImgGallery background='url(/image/html.jpg) no-repeat center center' />
      <ImgGallery background='url(/image/css.jpg) no-repeat center center' />
      <ImgGallery background='url(/image/javascript.jpg) no-repeat center center' />
      <ImgGallery background='url(/image/react.jpg) no-repeat center center' />
    </div>
  )
}

export default Logos
