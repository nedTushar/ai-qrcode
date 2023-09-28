import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = (userExist) => {
  const user = userExist.user;

  const navigate = useNavigate();
  const [qrContent, setQRContent] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = async () => {
    try {
      const response = await fetch(
        `/api/generate?qr_content=${qrContent}&image_description=${imageDescription}`
      );
      const data = await response.json();
      setImageUrl(data.image_url);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  function downloadFile(url) {
    // check if userExist only then download the qrcode
    if (user) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.responseType = "blob";
      xhr.onload = function () {
        if (xhr.status === 200) {
          const blob = xhr.response;
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "xqrcode.png";
          link.click();
        } else {
          console.error("Error downloading file:", xhr.status);
        }
      };
      xhr.send();
    } else {
      // if !userExist the redirect to signup page
      navigate("/signup");
    }
  }

  return (
    <>
      {/* Heading */}
      <div className="flex items-center justify-center p-4">
        <h1 className=" flex justify-center text-center text-2xl sm:4xl sm:p-8 font-bold">
          An AI Generated Beautiful QRCodes
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 p-4 gap-4">
        {/* Input Box */}
        <div className=" flex flex-col items-center justify-between p-4 border shadow-xl rounded h-[400px] md:w-[400px]">
          <div className="flex flex-col pb-2 w-[300px]">
            <label
              className="font-medium pb-1 text-gray-700 text-sm md:text-base"
              htmlFor="url"
            >
              Url
            </label>
            <input
              className="border shadow-md outline-none rounded-md p-1 py-2 text-sm md:text-base"
              id="url"
              type="text"
              value={qrContent}
              onChange={(e) => setQRContent(e.target.value)}
            />
          </div>
          <div className="flex flex-col pb-2">
            <label
              className="font-medium pb-1 text-gray-700 text-sm md:text-base"
              htmlFor="content"
            >
              Prompt
            </label>
            <textarea
              className="border shadow-md outline-none h-[100px] w-[300px] rounded-md p-2 text-sm md:text-base"
              id="content"
              type="text"
              value={imageDescription}
              onChange={(e) => setImageDescription(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="border bg-[#1c2226] hover:bg-black text-white p-1 px-4 rounded-lg"
              onClick={generateImage}
            >
              Generate
            </button>
          </div>
        </div>

        {/* Output box */}
        <div className="flex flex-col items-center justify-between p-4 border shadow-xl rounded md:w-[400px]">
          <div className="font-bold text-lg">QrCode</div>
          <div className="border shadow-md w-[300px] h-[300px] rounded-lg">
            {imageUrl && (
              <img
                className="rounded-lg"
                src={imageUrl}
                alt="generated-image"
              />
            )}
          </div>
          <div className="pt-2">
            <button
              className="border  bg-[#1c2226] hover:bg-black text-white rounded-lg p-1 px-4 hover:px-6"
              onClick={() => downloadFile(imageUrl)}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
