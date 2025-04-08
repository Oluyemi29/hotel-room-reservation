"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

interface cloudinaryResponse {
  asset_id: string;
  public_id: string;
  secure_url: string;
}

type ImageProps = {
  uploadedImages: cloudinaryResponse[];
  setUploadedImages: React.Dispatch<React.SetStateAction<cloudinaryResponse[]>>;
};

const ImageUploader = ({ uploadedImages, setUploadedImages }: ImageProps) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [allArray, setAllArray] = useState<string[]>([]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      try {
        setUploading(true);
        setError(null);
        const uploadPromises = acceptedFiles.map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "crystalhotel");
          formData.append("cloud_name", "devoluyemi");
          formData.append("folder", "crystalhotel");

          const responsed = await axios.post(
            "https://api.cloudinary.com/v1_1/devoluyemi/image/upload",
            formData
          );
          return responsed.data;
        });

        const result = await Promise.all(uploadPromises);
        localStorage.setItem(
          "imageNeeded",
          JSON.stringify([
            ...result.map((EachDet) => {
              return EachDet.secure_url;
            }),
          ])
        );
        setUploadedImages((prevData) => [...prevData, ...result]);
        const getArray = JSON.parse(
          localStorage.getItem("imageNeeded") as string
        );
        setAllArray([...getArray]);
      } catch (error) {
        setError("An error occured");
        console.log(error);
      } finally {
        setUploading(false);
      }
    },
    [setUploadedImages]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <>
        <div
          {...getRootProps()}
          style={{
            border: "1px dashed gray",
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files</p>
          ) : (
            <p>Drag n drop some files here, or click to select files</p>
          )}
        </div>
        {error && <p className="text-red-600">{error}</p>}
        {uploading && <p>Loading...</p>}
        <div className=" flex gap-4">
          {uploadedImages.map((uploadedImage, index) => {
            return (
              <div key={index}>
                <Image
                  src={uploadedImage.secure_url}
                  alt="uploadImage"
                  width={70}
                  height={70}
                  priority
                  quality={100}
                  className="rounded-md"
                />
              </div>
            );
          })}
        </div>
      </>
      <div className="flex flex-col gap-1">
        <h1>{allArray}</h1>;
      </div>
    </div>
  );
};

export default ImageUploader;
