import React from 'react'

const ImgGallery = (props: { background: string }) => {
  const imgGalleryStyles: React.CSSProperties = {
    position: 'relative',
    width: '32%',
    height: '400px',
    borderRadius: '15px',
    border: '3px solid red',
    background: props.background,
  }
  return <div style={imgGalleryStyles}></div>
}

const Gallery = () => {
  const galleryStyles: React.CSSProperties = {
    height: '300px',
    marginBottom: '200px',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    marginLeft: '30px',
    marginRight: '30px',
  }

  return (
    <div style={galleryStyles}>
      <ImgGallery background='url(/image/img1.png) no-repeat center center' />
      <ImgGallery background='url(/image/img2.png) no-repeat center center' />
      <ImgGallery background='url(/image/img4.png) no-repeat center center' />
    </div>
  )
}

export default Gallery
