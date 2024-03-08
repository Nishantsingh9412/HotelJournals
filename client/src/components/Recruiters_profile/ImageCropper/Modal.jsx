import { IoMdCloseCircle } from "react-icons/io";
import ImageCropper from "./ImageCropper";

const Modal = ({ updateAvatar, closeModal,oldImageURL }) => {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 10
      }}
      aria-labelledby="crop-image-dialog"
      role="dialog"
      aria-modal="true"
    >
      <div style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(75, 85, 99, 0.75)",
        transition: "all"
      }}></div>
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 10,
        width: "100%",
        overflowY: "auto"
      }}>
        <div style={{
          display: "flex",
          minHeight: "100%",
          justifyContent: "center",
          padding: "48px 8px",
          textAlign: "center"
        }}>
          <div style={{
            position: "relative",
            width: "95%",
            minHeight: "60vh",
            borderRadius: "1rem",
            backgroundColor: "#1F2937",
            color: "#374151",
            textAlign: "left",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            transition: "all"
          }}>
            <div style={{ padding: "16px 20px" }}>
              <button
                type="button"
                style={{
                  borderRadius: "0.375rem",
                  padding: "4px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9CA3AF",
                  position: "absolute",
                  top: "8px",
                  right: "8px"
                }}
                onClick={closeModal}
              >
                <span className="sr-only">Close menu</span>
                <IoMdCloseCircle 
                  size={25}
                />
              </button>
              <ImageCropper
                updateAvatar={updateAvatar}
                closeModal={closeModal}
                oldImageURL={oldImageURL}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;