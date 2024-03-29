import { useEffect, useRef, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import Modal from "./Modal";

const Profile = (props) => {
  const avatarUrl = useRef(
    // "https://avatarfiles.alphacoders.com/161/161002.jpg"
    props.oldImage
  );
  const [modalOpen, setModalOpen] = useState(false);

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
  };


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '1rem'
    }}>
      <div style={{ position: 'relative' }}>
        <button
          style={{
            position: 'absolute',
            bottom: '-0.75rem',
            left: 0,
            right: 0,
            margin: 'auto',
            width: 'fit-content',
            padding: '0.35rem',
            borderRadius: '100px',
            backgroundColor: '#E4B49D',
            border: '1px solid #E4B49D'
          }}
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
          <FaPencil />
        </button>
          <img
            src={avatarUrl.current}
            alt="Avatar"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              border: '2px solid #CBD5E0'
            }}
          />
      </div>
      {modalOpen && (
        <Modal
          id={props.id}
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
          oldImageURL={props.oldImage}
        />
      )}
    </div>
  );
};

export default Profile;
