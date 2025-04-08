"use client";
import { Button, Card, Input, Textarea } from "@heroui/react";
import React, { useState } from "react";
import type { Selection } from "@heroui/react";
import { Select, SelectItem } from "@heroui/react";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { TbCurrencyNaira } from "react-icons/tb";
import { CreateRoom } from "@/app/api/Action";
import { Spinner } from "@heroui/spinner";

export const BedTypeList = [
  { key: "Single", label: "Single" },
  { key: "Double", label: "Double" },
  { key: "King-size", label: "King-size" },
  { key: "Queen-size", label: "Queen-size" },
  { key: "2 Queen-size", label: "2 Queen-size" },
  { key: "2 Twin Beds", label: "2 Twin Beds" },
  { key: "Tatami Futon", label: "Tatami Futon" },
  { key: "Tatami & Futon", label: "Tatami & Futon" },
  { key: "California King", label: "California King" },
];
const AmenitiesList = [
  { key: "Free Wi-Fi", label: "Free Wi-Fi" },
  { key: "Smart TV", label: "Smart TV" },
  { key: "Mini-bar", label: "Mini-bar" },
  { key: "Balcony", label: "Balcony" },
  { key: "Air Conditioning", label: "Air Conditioning" },
];

const UploadRoom = () => {
  const [amenit, setAmenities] = React.useState<Selection>(new Set([]));
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState({
    preview: "",
    file: "",
  });

  const formSchema = z.object({
    name: z
      .string({ message: "Kindly enter Room Name" })
      .min(2, { message: "Room Name too short" })
      .max(30, { message: "Room Name too long" }),
    size: z
      .string({ message: "Kindly enter Room Size" })
      .min(2, { message: "Kindly enter Room Size" })
      .max(30, { message: "Room Name too long" }),
    price: z.string({ message: "Kindly enter Room Price per Night" }).refine(
      (value) => {
        return Number(value) >= 2000;
      },
      { message: "Price too small" }
    ),
    maxOccupancy: z
      .string({ message: "Kindly enter Room Maximum Occupancy" })
      .refine(
        (value) => {
          return Number(value) > 0;
        },
        { message: "Invalid Occupancy number" }
      ),
    bedType: z
      .string({ message: "Bed Type cant be empty" })
      .min(1, { message: "Bed Type cant be empty" }),
    amenities: z
      .string({ message: "Amenities cant be empty" })
      .min(1, { message: "Amenities cant be empty" }),
    description: z
      .string({ message: "Kindly enter Room Description" })
      .min(1, { message: "Kindly enter Room Description" })
      .max(1000, { message: "Description message too long" }),
    image: z
      .instanceof(File || undefined)
      .refine(
        (value) => {
          return value.size <= 1024 * 1024 * 2;
        },
        { message: "Maximum of 2MB image is required" }
      )
      .refine(
        (value) => {
          return value.type.startsWith("image/");
        },
        { message: "Only Image file is allowed" }
      ),
  });

  type formSchemaType = z.infer<typeof formSchema>;

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const submit = async (value: formSchemaType) => {
    setLoading(true);
    const {
      amenities,
      bedType,
      description,
      image,
      maxOccupancy,
      name,
      price,
      size,
    } = value;
    const Amenity = amenities.split(",");

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "crystalhotel");

    const request = await fetch(
      `https://api.cloudinary.com/v1_1/devoluyemi/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const response = await request.json();
    const imageUrl = response.secure_url as string;
    const result = await CreateRoom({
      Amenity,
      bedType,
      description,
      imageUrl,
      maxOccupancy,
      name,
      price,
      size,
    });
    if (result === true) {
      toast.success("Room Information Uploaded successfully");
    } else {
      toast.error("Error when uploading the room");
    }

    setImage((prevData) => {
      return {
        ...prevData,
        preview: "",
        file: "",
      };
    });
    reset();
    setLoading(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files, value } = e.target;
    if (files) {
      setImage((prevData) => {
        return {
          ...prevData,
          preview: URL.createObjectURL(files[0]),
          file: value,
        };
      });
    }
  };

  return (
    <div className="w-full my-10">
      <Card className="flex text-default-800 w-full md:w-[50%] mx-auto p-5 flex-col">
        <h1 className="text-2xl text-center font-bold mt-2">Upload Rooms</h1>
        <p className="mt-1 text-center mb-5">Kindly fill in the room details</p>

        <form onSubmit={handleSubmit(submit)}>
          <Card className="flex flex-col gap-3 p-5">
            <Image
              src={image.preview || "/boutique.jpg"}
              alt="hotel"
              width={100}
              height={100}
              priority
              quality={100}
              className="mx-auto rounded-md"
            />
            {errors.image && (
              <>
                <p className="text-red-600 text-center text-[0.7rem]">
                  {errors.image.message}
                </p>
              </>
            )}
            <label className="bg-carton px-5 py-1 mt-5 mx-auto cursor-pointer rounded-md w-max">
              <FaCamera size={25} className="text-black mx-auto" />
              <p className="text-black text-[0.7rem]">Upload room image</p>
              <Controller
                control={control}
                name="image"
                render={({ field: { onChange } }) => {
                  return (
                    <input
                      type="file"
                      hidden
                      accept="image/png,image/jpg,image/jpeg"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChange(e.target.files ? e.target.files[0] : "");
                        handleImageChange(e);
                      }}
                    />
                  );
                }}
              />
            </label>
            <Input
              className="w-full"
              label={"Room Name"}
              placeholder={"Room Name"}
              {...register("name")}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />
            <Input
              className="w-full"
              label={"Room Size"}
              placeholder={"Room Size"}
              {...register("size")}
              isInvalid={!!errors.size}
              errorMessage={errors.size?.message}
            />
            <Input
              className="w-full"
              label={"Price Per Night"}
              startContent={<TbCurrencyNaira />}
              type="number"
              placeholder={"Price Per Night"}
              {...register("price")}
              isInvalid={!!errors.price}
              errorMessage={errors.price?.message}
            />
            <Input
              className="w-full"
              label={"Maximum Occupancy"}
              type="number"
              placeholder={"Maximum Occupancy"}
              endContent={"Occupancy"}
              {...register("maxOccupancy")}
              isInvalid={!!errors.maxOccupancy}
              errorMessage={errors.maxOccupancy?.message}
            />
            <div className="flex w-full flex-col gap-2">
              <Controller
                name="bedType"
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <Select
                      className="w-full"
                      label="Select Bed Type"
                      {...register("bedType")}
                      onChange={onChange}
                      value={value}
                      isInvalid={!!errors.bedType}
                      errorMessage={errors.bedType?.message}
                    >
                      {BedTypeList.map((bedType) => (
                        <SelectItem key={bedType.key}>
                          {bedType.label}
                        </SelectItem>
                      ))}
                    </Select>
                  );
                }}
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <Select
                className="w-full"
                label="Select Amenities"
                {...register("amenities")}
                placeholder="Select Amenites"
                selectedKeys={amenit}
                variant="bordered"
                selectionMode="multiple"
                onSelectionChange={setAmenities}
                isInvalid={!!errors.amenities}
                errorMessage={errors.amenities?.message}
              >
                {AmenitiesList.map((Amenities) => (
                  <SelectItem key={Amenities.key}>{Amenities.label}</SelectItem>
                ))}
              </Select>
              <p className="text-default-500 text-small">
                Selected: {Array.from(amenit).join(", ")}
              </p>
            </div>
            <Textarea
              className="w-full"
              label={"Room Description"}
              placeholder="Room Description"
              {...register("description")}
              isInvalid={!!errors.description}
              errorMessage={errors.description?.message}
            />
            {loading ? (
              <>
                <Button
                  type="button"
                  disabled={true}
                  className="bg-carton mt-10 h-14 font-semibold text-lg text-black"
                >
                  <Spinner color="current" size="sm" />
                  Loading...
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="submit"
                  className="bg-carton mt-10 h-14 font-semibold text-lg text-black"
                >
                  Upload Room
                </Button>
              </>
            )}
          </Card>
        </form>
      </Card>
    </div>
  );
};

export default UploadRoom;
