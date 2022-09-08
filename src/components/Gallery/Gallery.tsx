import React from 'react'

/* HISTORY OF JS */
const ImgGallery = (props: { background: string }) => {
  const ImgGalleryStyles = {
    position: 'relative',
    marginTop: '20px',
    width: '32%',
    height: '400px',
    borderRadius: '15px',
    border: '3px solid rgba(255, 218, 67, 1) 65%',
    background: props.background,
  } as const

  return <div style={ImgGalleryStyles}></div>
}

const Gallery = () => {
  const galleryStyles = {
    height: '300px',
    marginBottom: '200px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '30px',
    marginRight: '30px',
  } as const

  return (
    <div style={galleryStyles}>
      <ImgGallery background='url(/image/img1.png) no-repeat center center' />
      <ImgGallery background='url(/image/img2.png) no-repeat center center' />
      <ImgGallery background='url(/image/img4.png) no-repeat center center' />
    </div>
  )
}

export default Gallery
