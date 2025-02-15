// src/Gallery.js
import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
 

const images = [
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6296.webp?alt=media&token=72c66fac-e27c-470c-8195-ec69359ed7ff',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6301.webp?alt=media&token=806182ba-cb30-4a8d-8530-af64a71e31bf',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6325.webp?alt=media&token=7911bb38-1fb0-4d38-b79e-c0e6bd2718fd',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6343.webp?alt=media&token=1e9baf36-89fb-4b68-91e7-4f729726aa15',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6348.webp?alt=media&token=4bc3879a-f62f-44ac-bb59-e3226f6a6370',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6354.webp?alt=media&token=6e3de1a3-1211-43e2-a4a9-7c33e316cd3c',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6360.webp?alt=media&token=d5a21e47-a501-45ce-a112-68779467ebbe',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6365.webp?alt=media&token=c8bc942b-4d2e-48e7-a568-bc65bfce2dfd',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6369.webp?alt=media&token=c46f3eba-7b3e-4e30-b158-8e86484a774a',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6372.webp?alt=media&token=31cc06e1-104a-45a1-884b-cdea202c887a',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6406.webp?alt=media&token=2c82e7ce-79d0-44e1-9b41-a61ea6f0e3c0',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6412.webp?alt=media&token=3d1de04a-6f84-405b-9bae-0aff0f7777cb',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6443.webp?alt=media&token=b7cf07d3-da42-481f-bf92-c3f848aa5e10',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6461.webp?alt=media&token=8b7ec556-0201-490f-8641-6e1709bed715',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6519.webp?alt=media&token=07cc37a5-532f-45f1-9679-a22ade8f2f37',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6521.webp?alt=media&token=67f814bd-3c59-4e39-8b6c-456a6fabad6d',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6541.webp?alt=media&token=8986022e-8634-4a54-b1a5-df9920450721',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6622.webp?alt=media&token=f8476495-b689-438b-9745-21790eab25d2',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6700.webp?alt=media&token=8201f008-4561-4a8b-ad59-ba05dd611dcc',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6984.webp?alt=media&token=863c2b56-1820-496d-8140-ac8de437506c',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_6997.webp?alt=media&token=080e0599-d17e-4d36-877a-2472d1c87d99',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_7586.webp?alt=media&token=512f2573-ac70-4640-8292-8591371a22d4',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_7586.webp?alt=media&token=512f2573-ac70-4640-8292-8591371a22d4',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_7610.webp?alt=media&token=a63eebbb-aa7b-4269-8a1a-92ed601c83ce',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_7629.webp?alt=media&token=dc438ee8-5108-479e-a4d6-e636272c15cb',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_7659.webp?alt=media&token=8f4e5262-a874-4fab-bf29-52a89ba9b8f6',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_7664.webp?alt=media&token=fef2239c-f015-43ab-9d08-4faa0d06f756',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_7693.webp?alt=media&token=cab0523a-bc10-43d1-adeb-d6598b7cb9a6',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_7695.webp?alt=media&token=7c5be0c6-8308-4801-8d98-1b07a5794b17',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_7713.webp?alt=media&token=bd1e99ae-6cff-4e96-9973-a8d2eebca6fd',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_7737.webp?alt=media&token=e34284fa-0a29-4960-9ad4-ecc06d3e9acb',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_7774.webp?alt=media&token=56e3e0c5-c325-4691-91b7-bc516090ca47',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_7935.webp?alt=media&token=cf724af5-61ff-4013-a554-0d51006b8d6a',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_7986.webp?alt=media&token=4148753a-64da-48e1-86a2-29241df23d91',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_7996.webp?alt=media&token=dece32e1-f3de-4996-a24f-1c5018cd41e3',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_8056.webp?alt=media&token=2415a2cb-c3b7-466d-9253-81143a2f6fbb',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FSchools%2FDSC_8114.webp?alt=media&token=93a50205-8ce5-4f0c-bf05-88bcb9a28642',
    

    // Add more image objects as needed
  ];
  
  const ITEMS_PER_PAGE = 16;

  const Gallery = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handlePageClick = (data) => {
      setCurrentPage(data.selected);
    };
  
    const openModal = (image) => {
      setSelectedImage(image);
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
      setSelectedImage(null);
    };
  
    const nextImage = () => {
      const currentIndex = images.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    };
  
    const prevImage = () => {
      const currentIndex = images.indexOf(selectedImage);
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
    };
  
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const selectedImages = images.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
    return (
      <div className="gallery-container">
        <div className="gallery">
          {selectedImages.map((image, index) => (
            <div className="thumbnail" key={index}>
              <img
                src={image}
                alt={`Gallery`}
                className="img-fluid"
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={Math.ceil(images.length / ITEMS_PER_PAGE)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
  
        <Modal show={showModal} onHide={closeModal}  centered size="xl">
          <Modal.Body>
            <img src={selectedImage} alt="Selected" className="img-fluid" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={prevImage}>
              Previous
            </Button>
            <Button variant="primary" onClick={nextImage}>
              Next
            </Button>
            <Button variant="danger" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };
    
    export default Gallery;
  