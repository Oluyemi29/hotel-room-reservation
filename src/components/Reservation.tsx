"use client";
import { Button, Card, Input, Textarea } from "@heroui/react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiSolidErrorAlt } from "react-icons/bi";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
} from "@heroui/react";
import Rating from "@mui/material/Rating";
import { CommentReview, UserDeleteReview } from "@/app/api/Action";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";

type reserveMadeProps = {
  reserveMade: {
    userId: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    startDate: string;
    endDate: string;
    roomId: string;
    price: number;
    status: string;
    paymentIntentId: string;
    clientSecretId: string;
    room: {
      name: string;
      id: string;
      createdAt: Date;
      updatedAt: Date;
      price_per_night: number;
      description: string;
      image: string;
      room_size: string;
      bed_type: string;
      max_occupancy: number;
      amenities: string[];
    };
    Review: {
      id: string;
      title: string;
      description: string;
      rating: number;
      reservation: {
        startDate: string;
        endDate: string;
        price: number;
        status: string;
        user: {
          id: string;
          role: string;
          email: string;
          firstname: string | null;
          lastname: string | null;
          imageUrl: string;
          createdAt: Date;
          updatedAt: Date;
        };
        room: {
          name: string;
          id: string;
          createdAt: Date;
          updatedAt: Date;
          description: string;
          amenities: string[];
          price_per_night: number;
          image: string;
          room_size: string;
          bed_type: string;
          max_occupancy: number;
        };
      };
    }[];
  }[];
};

// const AmenitiesList = [
//   { key: "Free Wi-Fi", label: "Free Wi-Fi" },
//   { key: "Smart TV", label: "Smart TV" },
//   { key: "Mini-bar", label: "Mini-bar" },
//   { key: "Balcony", label: "Balcony" },
//   { key: "Air Conditioning", label: "Air Conditioning" },
// ];

const Reservation = ({ reserveMade }: reserveMadeProps) => {
  const [rating, setRating] = useState<number>(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [reviewdeletePropmt, setReviewDeletePropmt] = useState(false);
  const [review, setReview] = useState({
    title: "",
    description: "",
  });
  const [reservationId, setReservationId] = useState("");
  const [deleteReview, setDeleteReview] = useState({
    title: "",
    description: "",
    reviewId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setReview((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleReviewDelete = async (id: string) => {
    const result = await UserDeleteReview(id);
    if (result === true) {
      toast.success("Review deleted Successfully");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { title, description } = review;

    if (!title || !description || !reservationId) {
      toast.error("Some input are required");
      return;
    }
    const result = await CommentReview({
      rating,
      reservationId,
      title,
      description,
    });
    setReview((prevData) => {
      return {
        ...prevData,
        description: "",
        title: "",
      };
    });
    if (result === true) {
      toast.success("review made Successfully");
    }
    setReservationId("");
    setRating(0);
  };
  return (
    <div className="w-full my-8">
      <div className="flex flex-col gap-5">
        {reserveMade.length > 0 ? (
          <>
            <div>
              <h1 className="text-xl text-center font-semibold">
                Your Reservation
              </h1>
              <p className="text-sm text-center mb-5">
                Here are all your room reservation details
              </p>
            </div>
            {reserveMade.map((eachReserve, index) => {
              return (
                <Card
                  key={index}
                  className="p-5 flex md:flex-row flex-col justify-between gap-5"
                >
                  <div className="w-full">
                    <Image
                      src={eachReserve.room.image}
                      alt={eachReserve.room.bed_type}
                      width={100}
                      height={100}
                      priority
                      quality={100}
                      className="md:w-[60%] w-full rounded-lg mx-auto my-5"
                    />
                    <>
                      <Modal
                        onClose={() => setReviewDeletePropmt(false)}
                        isOpen={reviewdeletePropmt}
                      >
                        <ModalContent>
                          <ModalHeader className="flex flex-col gap-1">
                            Deete Review
                          </ModalHeader>
                          <ModalBody>
                            <h1>
                              Are you sure u want to delete review with Title :{" "}
                              {deleteReview.title} and Descripion :{" "}
                              {deleteReview.description}
                            </h1>
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              color="danger"
                              variant="light"
                              onPress={() => setReviewDeletePropmt(false)}
                              size="sm"
                            >
                              No
                            </Button>
                            <Button
                              size="sm"
                              className="bg-carton text-black"
                              onPress={() => {
                                setReviewDeletePropmt(false);
                                handleReviewDelete(deleteReview.reviewId);
                              }}
                            >
                              Yes
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </>
                    {eachReserve.Review.length > 0 && (
                      <>
                        <div className="h-48 overflow-y-scroll">
                          <div className="flex flex-col gap-3">
                            {eachReserve.Review.map((eachReview, index) => {
                              return (
                                <Card key={index} className="p-5 text-default-800 h-max">
                                  <div>
                                    <div className="flex flex-row justify-between items-center">
                                      <div className="flex flex-row gap-3 items-start">
                                        <Image
                                          src={
                                            eachReview.reservation.user.imageUrl
                                          }
                                          alt="mine"
                                          width={20}
                                          height={20}
                                          priority
                                          quality={100}
                                          className="rounded-full"
                                        />
                                        <div>
                                          <h1 className="text-[0.7rem] font-semibold">
                                            {eachReview.reservation.user.email}
                                          </h1>
                                          <p className="text-[0.6rem]">
                                            {eachReview.reservation.user
                                              .firstname ?? "User"}
                                          </p>
                                        </div>
                                      </div>
                                      <MdDelete
                                        size={25}
                                        color="red"
                                        className="cursor-pointer"
                                        onClick={() => {
                                          setDeleteReview((prevData) => {
                                            return {
                                              ...prevData,
                                              description:
                                                eachReview.description,
                                              title: eachReview.title,
                                              reviewId: eachReview.id,
                                            };
                                          });
                                          setReviewDeletePropmt(true);
                                        }}
                                      />
                                    </div>
                                    <Rating
                                      size="small"
                                      readOnly
                                      value={eachReview.rating ?? 0}
                                      precision={0.5}
                                    />
                                    <div>
                                      <h1 className="text-[0.7rem] font-semibold">
                                        {eachReview.title}
                                      </h1>
                                      <p className="text-[0.7rem]">
                                        {eachReview.description}
                                      </p>
                                    </div>
                                  </div>
                                </Card>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="w-full text-default-800">
                    <h1 className="text-lg font-bold underline underline-offset-4 italic">
                      Room Details
                    </h1>
                    <div className="flex flex-col gap-1">
                      <div className="w-full flex my-1 md:text-[0.9rem] text-[0.8rem] mt-7 gap-4">
                        <h1>Name :</h1>
                        <h1 className="font-semibold italic">
                          {eachReserve.room.name}
                        </h1>
                      </div>
                      <div className="w-full flex my-1 md:text-[0.9rem] text-[0.8rem] gap-4">
                        <h1>Bed Type :</h1>
                        <h1 className="font-semibold italic">
                          {eachReserve.room.bed_type}
                        </h1>
                      </div>
                      <div className="w-full md:text-[0.9rem] text-[0.8rem] flex flex-col my-1 gap-1">
                        <h1>Room Description :</h1>
                        <h1 className="font-semibold italic">
                          {eachReserve.room.description}
                        </h1>
                      </div>
                      <div className="w-full flex my-1 md:text-[0.9rem] text-[0.8rem] gap-4">
                        <h1>Max Occupancy :</h1>
                        <h1 className="font-semibold italic">
                          {eachReserve.room.max_occupancy}
                        </h1>
                      </div>
                      <div className="w-full flex my-1 md:text-[0.9rem] text-[0.8rem] gap-4">
                        <h1>Price per Night :</h1>
                        <h1 className="font-semibold italic">
                          {new Intl.NumberFormat("en-NG", {
                            style: "currency",
                            currency: "NGN",
                          }).format(eachReserve.room.price_per_night)}
                        </h1>
                      </div>
                      <div className="w-full flex my-1 md:text-[0.9rem] text-[0.8rem] gap-4">
                        <h1>Room Size :</h1>
                        <h1 className="font-semibold italic">
                          {eachReserve.room.room_size}
                        </h1>
                      </div>
                      <div className="w-full md:text-[0.9rem] text-[0.8rem] flex flex-col my-1 gap-1">
                        <h1>Room Amenities :</h1>
                        <h1 className="font-semibold italic">
                          {eachReserve.room.amenities.join(", ")}
                        </h1>
                      </div>
                      <div className="w-full flex my-1 md:text-[0.9rem] text-[0.8rem] gap-4">
                        <h1>Room Created Date :</h1>
                        <h1 className="font-semibold italic">
                          {moment(
                            new Date(eachReserve.room.createdAt)
                          ).fromNow()}
                        </h1>
                      </div>
                      <div className="w-full flex my-1 md:text-[0.9rem] text-[0.8rem] gap-4">
                        <h1>Reservation Started :</h1>
                        <h1 className="font-semibold italic">
                          {moment(new Date(eachReserve.startDate)).fromNow()} ({" "}
                          {new Date(eachReserve.startDate).toDateString()} )
                        </h1>
                      </div>
                      <div className="w-full flex my-1 md:text-[0.9rem] text-[0.8rem] gap-4">
                        <h1>Reservation End :</h1>
                        <h1 className="font-semibold italic">
                          {moment(new Date(eachReserve.endDate)).fromNow()} ({" "}
                          {new Date(eachReserve.endDate).toDateString()} )
                        </h1>
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-3 mt-5">
                          <Button
                            className="capitalize bg-carton text-black font-semibold"
                            onPress={() => {
                              onOpen();
                              setReservationId(eachReserve.id);
                            }}
                          >
                            Drop Review
                          </Button>
                        </div>
                        <Drawer
                          isOpen={isOpen}
                          placement={"right"}
                          onOpenChange={onOpenChange}
                          size="sm"
                        >
                          <DrawerContent>
                            {(onClose) => (
                              <>
                                <DrawerHeader className="flex flex-col gap-1">
                                  Drop Review
                                </DrawerHeader>
                                <DrawerBody>
                                  <form className="flex flex-col gap-4">
                                    <Input
                                      label={"Review Title"}
                                      placeholder="Review Tite"
                                      name="title"
                                      value={review.title}
                                      onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                      ) => handleChange(e)}
                                    />
                                    <Textarea
                                      label={"Review Description"}
                                      placeholder="Review Description"
                                      name="description"
                                      value={review.description}
                                      onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                      ) => handleChange(e)}
                                    />
                                    <Rating
                                      onChange={(event, value) => {
                                        console.log(event);
                                        setRating(value ?? 0);
                                      }}
                                      name="half-rating"
                                      defaultValue={0}
                                      precision={0.5}
                                      max={5}
                                      className="text-default-800"
                                      color="white"
                                    />

                                    <button
                                      type="button"
                                      onClick={(e: React.FormEvent) => {
                                        handleSubmit(e);
                                        onClose();
                                      }}
                                      className="bg-carton py-3 rounded-lg text-black mt-5 font-semibold"
                                    >
                                      Submit Review
                                    </button>
                                  </form>
                                </DrawerBody>
                                <DrawerFooter>
                                  <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                  >
                                    Close
                                  </Button>
                                </DrawerFooter>
                              </>
                            )}
                          </DrawerContent>
                        </Drawer>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </>
        ) : (
          <>
            <div className="my-32 flex flex-col justify-center items-center">
              <BiSolidErrorAlt
                size={70}
                color="red"
                className="bg-red-100 p-2 rounded-md mx-auto"
              />
              <h1 className="text-center text-xl mt-5 font-bold">
                No Successful Reservation Made Currently
              </h1>
              <Button
                className="text-black mt-2 font-semibold bg-carton px-10"
                as={Link}
                href="/"
              >
                Go Home
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Reservation;
