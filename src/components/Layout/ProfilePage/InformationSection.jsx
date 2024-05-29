import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import Cropper from 'react-easy-crop';

import PropTypes from 'prop-types';

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
  });

const getRadianAngle = (degreeValue) => {
  return (degreeValue * Math.PI) / 180;
};

/**
 * Returns the new bounding area of a rotated rectangle.
 */
const rotateSize = (width, height, rotation) => {
  const rotRad = getRadianAngle(rotation);

  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  };
};

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */
const getCroppedImg = async (
  imageSrc,
  pixelCrop,
  rotation = 0,
  flip = { horizontal: false, vertical: false }
) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return null;
  }

  const rotRad = getRadianAngle(rotation);

  // calculate bounding box of the rotated image
  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
    image.width,
    image.height,
    rotation
  );

  // set canvas size to match the bounding box
  canvas.width = bBoxWidth;
  canvas.height = bBoxHeight;

  // translate canvas context to a central location to allow rotating and flipping around the center
  ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
  ctx.rotate(rotRad);
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
  ctx.translate(-image.width / 2, -image.height / 2);

  // draw rotated image
  ctx.drawImage(image, 0, 0);

  const croppedCanvas = document.createElement('canvas');

  const croppedCtx = croppedCanvas.getContext('2d');

  if (!croppedCtx) {
    return null;
  }

  // Set the size of the cropped canvas
  croppedCanvas.width = pixelCrop.width;
  croppedCanvas.height = pixelCrop.height;

  // Draw the cropped image onto the new canvas
  croppedCtx.drawImage(
    canvas,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  // As Base64 string
  // return croppedCanvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve, reject) => {
    croppedCanvas.toBlob((file) => {
      resolve(URL.createObjectURL(file));
    }, 'image/jpeg');
  });
};

const PopUpChangePicture = ({
  handlePopUpChangePicture,
  isPopUpChangePictureOpen,
  setProfileImage,
}) => {
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setProfileImage(URL.createObjectURL(file)); // Set image in parent component
    }
  };

  return (
    <>
      {' '}
      <div
        className={
          isPopUpChangePictureOpen
            ? 'fixed inset-0 z-40 flex items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm'
            : 'fixed inset-0 z-40 hidden items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm'
        }
      >
        <div className="w-[529px] h-[383px] rounded-2xl bg-white shadow-cardShadow pt-[44px] pb-9 text-neutral-70 flex flex-col items-center relative">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="absolute top-[36px] left-[32px] cursor-pointer active:scale-90 transition-all duration-100"
            onClick={handlePopUpChangePicture}
          />
          <h1 className="text-[24px] font-semibold">Ubah foto profil</h1>
          <div className="flex flex-col items-center gap-6 mt-10">
            <div className="size-[100px] rounded-full shadow-cardShadow flex items-center justify-center relative active:scale-90 transition-all duration-300">
              <FontAwesomeIcon
                icon={faUser}
                className="text-primary-30 size-[60%]"
              />
              <input
                type="file"
                name=""
                id=""
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleImageChange}
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="font-medium">Tarik foto ke sini</h1>
              <h1 className="text-neutral-40 text-[12px] font-medium">
                - atau -
              </h1>
              <div className="flex items-center gap-4">
                <button className="w-fit h-10 px-[14px] py-2 flex gap-[10px] items-center relative cursor-pointer active:scale-90 transition-all duration-300">
                  <img src="/images/ProfilePage/gallery-icon.png" alt="" />
                  <h1 className="text-primary-100 text-[14px] font-medium">
                    Upload dari galeri
                  </h1>
                  <input
                    type="file"
                    name=""
                    id=""
                    className="absolute inset-0 opacity-0"
                  />
                </button>
                <button className="w-fit h-10 px-[14px] py-2 flex gap-[10px] items-center">
                  <img src="/images/ProfilePage/camera-icon.png" alt="" />
                  <h1 className="text-primary-100 text-[14px] font-medium">
                    Ambil foto
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </div>{' '}
      </div>
    </>
  );
};

PopUpChangePicture.propTypes = {
  handlePopUpChangePicture: PropTypes.func.isRequired,
  isPopUpChangePictureOpen: PropTypes.bool.isRequired,
  setProfileImage: PropTypes.func.isRequired,
};

const PopUpDeletePictuce = ({
  isPopUpDeletePicture,
  handlePopUpDeletePicture,
}) => {
  return (
    <div
      className={
        isPopUpDeletePicture
          ? 'fixed inset-0 z-40 flex items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm'
          : 'fixed inset-0 z-40 hidden items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm'
      }
    >
      <div className="w-[502px] h-[185px] rounded-2xl bg-white p-8 shadow-cardShadow flex flex-col items-center">
        <h1 className="text-[20px] font-semibold text-black">
          Hapus Foto Profil?
        </h1>
        <div className="flex gap-3 mt-[37px]">
          <button
            onClick={handlePopUpDeletePicture}
            className="w-[213px] h-[54px] text-primary-100 font-medium rounded-xl text-[20px]"
          >
            Batal
          </button>
          <button className="w-[213px] h-[54px] font-medium rounded-xl bg-primary-60 text-white text-[20px]">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

PopUpDeletePictuce.propTypes = {
  isPopUpDeletePicture: PropTypes.bool.isRequired,
  handlePopUpDeletePicture: PropTypes.func.isRequired,
};

const PopUpCropPicture = ({
  profileImage,
  isPopUpCropPictureOpen,
  handlePopUpCropPicture,
  handleSaveCropPicture,
  cropComplete,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(3);

  const cropSize = { width: 180, height: 180 };

  return (
    <div
      className={
        isPopUpCropPictureOpen
          ? 'fixed inset-0 z-40 flex items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm'
          : 'fixed inset-0 z-40 hidden items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm'
      }
    >
      <div className="w-[529px] h-[383px] rounded-2xl bg-white shadow-cardShadow pt-[44px] pb-9 text-neutral-70 flex flex-col items-center relative">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="absolute top-[36px] left-[32px] cursor-pointer active:scale-90 transition-all duration-100"
          onClick={handlePopUpCropPicture}
        />
        <h1 className="text-[24px] font-semibold text-neutral-70">
          Pangkas & putar
        </h1>
        <div className="size-[200px] relative border-[3px] border-neutral-40 p-[2px] mt-3 bg-[#D0D0D0] rounded-[2px]">
          {' '}
          <div className="relative size-full">
            {' '}
            <Cropper
              image={profileImage}
              minZoom={2}
              crop={crop}
              zoom={zoom}
              cropSize={cropSize}
              aspect={1 / 1}
              onCropChange={setCrop}
              onCropComplete={cropComplete}
              onZoomChange={setZoom}
            />
          </div>
        </div>
        <button
          onClick={handleSaveCropPicture}
          className="rounded-lg bg-primary-60 size-fit px-[14px] py-2 text-white text-[14px] font-medium mt-3"
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

PopUpCropPicture.propTypes = {
  profileImage: PropTypes.string,
  isPopUpCropPictureOpen: PropTypes.bool.isRequired,
  handlePopUpCropPicture: PropTypes.func.isRequired,
  cropComplete: PropTypes.func.isRequired,
  handleSaveCropPicture: PropTypes.func.isRequired,
};

const InformationSection = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isPopUpChangePicture, setIsPopUpChangePicture] = useState(false);
  const [isPopUpChangePicture2, setIsPopUpChangePicture2] = useState(false);
  const [isPopUpDeletePicture, setIsPopUpDeletePicture] = useState(false);

  const [profileImage, setProfileImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const saveCroppedImage = async () => {
    try {
      const cropImage = await getCroppedImg(profileImage, croppedAreaPixels);
      setCroppedImage(cropImage);
      setIsPopUpChangePicture2(!isPopUpChangePicture2);
      setIsPopUpChangePicture(!isPopUpChangePicture);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (profileImage) {
      setIsPopUpChangePicture2(!isPopUpChangePicture2);
    }
  }, [profileImage]);

  const handlePopUpChangePicture = () => {
    setIsPopUpChangePicture(!isPopUpChangePicture);
  };

  const handlePopUpDeletePicture = () => {
    setIsPopUpDeletePicture(!isPopUpDeletePicture);
  };
  const handlePopUpChangePicture2 = () => {
    setIsPopUpChangePicture2(!isPopUpChangePicture2);
    // setProfileImage(null);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <section className="w-[797px] h-[630px] rounded-2xl bg-white shadow-cardShadow pl-10 pr-7 pt-8 text-black flex flex-col">
      <PopUpChangePicture
        handlePopUpChangePicture={handlePopUpChangePicture}
        isPopUpChangePictureOpen={isPopUpChangePicture}
        setProfileImage={setProfileImage}
      />
      <PopUpDeletePictuce
        handlePopUpDeletePicture={handlePopUpDeletePicture}
        isPopUpDeletePicture={isPopUpDeletePicture}
      />
      {/* {profileImage && (
        <PopUpCropPicture
          profileImage={profileImage}
          isPopUpCropPictureOpen={isPopUpChangePicture2}
          handlePopUpCropPicture={handlePopUpChangePicture2}
        />
      )} */}
      <PopUpCropPicture
        profileImage={profileImage}
        isPopUpCropPictureOpen={isPopUpChangePicture2}
        handlePopUpCropPicture={handlePopUpChangePicture2}
        handleSaveCropPicture={saveCroppedImage}
        cropComplete={onCropComplete}
      />
      <h1 className="text-[24px] font-semibold">Informasi Akun</h1>
      <div className="flex items-center gap-6 mt-10">
        <div className="size-[111px] rounded-full bg-neutral-40 overflow-hidden">
          <img src={croppedImage} alt="" />
        </div>
        <div className="flex flex-col gap-[7px]">
          <button
            onClick={handlePopUpChangePicture}
            className="w-[112px] h-10 text-[14px] font-semibold text-neutral-30 flex items-center gap-[10px] px-[14px] py-2 border-2 border-neutral-40 rounded-lg active:scale-95 transition-all duration-300"
          >
            <img
              src="/images/ProfilePage/pencil-icon.png"
              alt=""
              className="size-6"
            />
            <h1>Ganti</h1>
          </button>
          <button
            onClick={handlePopUpDeletePicture}
            className="w-[112px] h-10 text-[14px] font-semibold text-neutral-30 flex items-center gap-[10px] px-[14px] py-2 border-2 border-neutral-40 rounded-lg active:scale-95 transition-all duration-300"
          >
            <img
              src="/images/ProfilePage/trash-icon.png"
              alt=""
              className="size-6"
            />
            <h1>Hapus</h1>
          </button>
        </div>
      </div>
      <form action="" className="mt-[38px]">
        <div className="grid grid-cols-2 gap-x-[29px] gap-y-6">
          {' '}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="fullname"
              className="font-medium text-[20px] text-neutral-80"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              name=""
              id="fullname"
              className="w-[350px] h-12 rounded-md shadow-inputShadow border-none"
              placeholder="Nama"
              autoComplete="off"
              disabled={isEdit ? false : true}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="telp"
              className="font-medium text-[20px] text-neutral-80"
            >
              No. Telpon
            </label>
            <input
              type="text"
              name=""
              id="telp"
              className="w-[350px] h-12 rounded-md shadow-inputShadow border-none"
              placeholder="0821"
              autoComplete="off"
              disabled={isEdit ? false : true}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="font-medium text-[20px] text-neutral-80"
            >
              Email
            </label>
            <input
              type="text"
              name=""
              id="email"
              className="w-[350px] h-12 rounded-md shadow-inputShadow border-none"
              placeholder="john@mail.com"
              autoComplete="off"
              disabled={isEdit ? false : true}
            />
          </div>
        </div>
        <div className="flex gap-[18px]">
          {isEdit ? (
            <>
              <div
                onClick={handleEdit}
                className="w-[161px] h-[54px] rounded-xl border border-primary-70 text-primary-70 text-[20px] font-medium mt-8 flex items-center justify-center active:scale-90 transition-all duration-300 cursor-pointer"
              >
                Batal
              </div>
              <button className="w-[161px] h-[54px] rounded-xl bg-primary-70 text-white text-[20px] font-medium mt-8 active:scale-90 transition-all duration-300 cursor-pointer">
                Perbarui
              </button>
            </>
          ) : (
            <div
              onClick={handleEdit}
              className="w-[161px] h-[54px] rounded-xl bg-primary-70 text-white text-[20px] font-medium mt-8 flex items-center justify-center active:scale-90 transition-all duration-300 cursor-pointer"
            >
              Edit Profil
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default InformationSection;
