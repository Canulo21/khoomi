import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "react-modal";
import watch1 from "../Assets/Collections/watches/w-1.png";
import watch2 from "../Assets/Collections/watches/w-2.png";
import watch3 from "../Assets/Collections/watches/w-3.png";
import watch4 from "../Assets/Collections/watches/w-4.png";

function WatchModal() {
  Modal.setAppElement("#root");

  const watches = [
    {
      img: watch1,
      name: "Watch1",
      price: "$990",
    },
    {
      img: watch2,
      name: "Watch2",
      price: "$890",
    },
    {
      img: watch3,
      name: "Watch3",
      price: "$1999",
    },
    {
      img: watch4,
      name: "Watch4",
      price: "$1200",
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (watch) => {
    setCurrentImage(watch);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-36 -mt-28 z-[3] relative">
        {watches.map((watch, i) => (
          <div key={i} className="text-center">
            <div className="box flex justify-center items-center bg-white hover:bg-[#FF4F04] ease-out duration-200 rounded-lg mb-4">
              <img
                className="hover:scale-90 duration-150 hover:drop-shadow-2xl cursor-pointer"
                src={watch.img}
                alt={watch.name}
                onClick={() => openModal(watch)}
              />
            </div>
            <p className="font-poppins font-semibold mb-2">{watch.name}</p>
            <p className="bg-[rgba(254,79,4,.09)] hover:bg-[rgba(254,79,4,1)] text-[#FF4F04] hover:text-white inline-block py-1 px-4 rounded-full text-sm cursor-pointer">
              {watch.price}
            </p>
          </div>
        ))}
      </div>
      {/* Modal for Watch */}
      {currentImage && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="flex justify-center items-center"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]"
        >
          <div className="relative bg-[#fafafa] p-4 rounded-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <CloseIcon fontSize="large" />
            </button>
            <img
              src={currentImage.img}
              alt={currentImage.name}
              width="700px"
              height="100%"
              className="max-w-full max-h-screen"
            />
            <div className="flex justify-between">
              <p className="text-2xl uppercase font-semibold">
                {currentImage.name}
              </p>
              <p className="text-xl text-[#FF4F04] font-medium">
                {currentImage.price}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default WatchModal;
