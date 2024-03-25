import React from 'react';
import Header from '../../components/Header';
import headerImage from '../../images/header_bg_3.jpg';
import './gallery.css';



const Gallery = () => {
  const galleryLength = 15;
  const images = []

  for(let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }



  return (
    <>
      <Header title="Our Gallery" image={headerImage}>
        Aenean at libero risus. In ut egestas metus. Aenean eget hendrerit purus. Mauris malesuada ac ex at suscipit. Lorem ipsum dolor sit 
      </Header>

      <section className="gallery">
        <div className="container gallery-container">
          {
            images.map((image, index) => {
              return <article>
                <img src={image} alt={`Galley Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section> 
    </>
  )
}



export default Gallery;