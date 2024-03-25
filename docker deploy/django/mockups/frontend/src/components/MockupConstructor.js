import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ColorPanel from "./ColorPanel";
import ThreeJSApp from "./ThreeJSApp";
import ImageEditor from "./ImageEditor";

function MockupConstructor() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const [textureImage, setTextureImage] = useState(null);

  const handleSetTexutreImage = (textureImage) => {
    setTextureImage(textureImage);
  };

  useEffect(() => {
    fetch(`/api/mockuptemplates/${slug}/`)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            setNotFound(true);
          }
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, [slug]);

  if (notFound) {
    return <div>404 Not Found</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="w-full p-4">
        {data && (
          <div className="flex justify-center space-x-4">
            <div className="">
              <ImageEditor
                onTextureImageChange={handleSetTexutreImage}
                templateImage={data.templateImage}
                imageHeight={data.templateImageHeight}
                imageWidth={data.templateImageWidth}
              />
            </div>

            <div className="">
              <ColorPanel hsva={hsva} setHsva={setHsva} />
            </div>
            <div className="">
              <div className="w-full aspect-w-1 aspect-h-1">
                <ThreeJSApp
                  color={hsva}
                  textureImage={textureImage}
                  glb={data.glb}
                  mockupName={data.name}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MockupConstructor;
