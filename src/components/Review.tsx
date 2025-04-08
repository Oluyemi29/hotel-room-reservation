"use client";
import {
  Button,
  Card,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { Rating } from "@mui/material";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { UserDeleteReview } from "@/app/api/Action";

type AllReviewProps = {
  AllReview: {
    rating: number;
    title: string;
    description: string;
    reservationId: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
};

const Review = ({ AllReview }: AllReviewProps) => {
  const [reviewdeletePropmt, setReviewDeletePropmt] = useState(false);
  const [deleteReview, setDeleteReview] = useState({
    title: "",
    description: "",
    reviewId: "",
  });

  const handleReviewDelete = async (id: string) => {
    const result = await UserDeleteReview(id);
    if (result === true) {
      toast.success("Review deleted Successfully");
    }
  };
  return (
    <div className="text-default-800">
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
                {deleteReview.title} and Descripion : {deleteReview.description}
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
      <Card className="text-default-800">
        <h1 className="text-2xl font-bold my-3 text-center">Review</h1>
        <Card className="p-5 text-default-800">
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>S/N</TableColumn>
              <TableColumn>TITLE</TableColumn>
              <TableColumn>DESCRIPTION</TableColumn>
              <TableColumn>RATING</TableColumn>
              <TableColumn>ACTION</TableColumn>
            </TableHeader>
            <TableBody>
              <>
                {AllReview.map((eachReview, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{eachReview.title}</TableCell>
                      <TableCell className="line-clamp-1">{eachReview.description}</TableCell>
                      <TableCell>
                        <Rating
                          size="small"
                          precision={0.5}
                          value={eachReview.rating}
                          readOnly
                        />
                      </TableCell>
                      <TableCell>
                        <MdDelete
                          size={25}
                          color="red"
                          className="cursor-pointer"
                          onClick={() => {
                            setDeleteReview((prevData) => {
                              return {
                                ...prevData,
                                description: eachReview.description,
                                title: eachReview.title,
                                reviewId: eachReview.id,
                              };
                            });
                            setReviewDeletePropmt(true);
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </>
            </TableBody>
          </Table>
        </Card>
      </Card>
    </div>
  );
};

export default Review;
