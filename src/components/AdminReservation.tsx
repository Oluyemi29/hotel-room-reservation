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
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { DeleteReservation } from "@/app/api/Action";

type AllReservationProps = {
  AllReservation: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    startDate: string;
    endDate: string;
    roomId: string;
    userId: string;
    price: number;
    status: string;
    paymentIntentId: string;
    clientSecretId: string;
  }[];
};

const AdminReservation = ({ AllReservation }: AllReservationProps) => {
  const [reviewdeletePropmt, setReserveDeletePropmt] = useState(false);
  const [deleteReserve, setDeleteReserve] = useState({
    startDate: "",
    endDate: "",
    reserveId: "",
    status: "",
  });

  const handleReserveDelete = async (id: string, status: string) => {
    const { endDate } = deleteReserve;
    if (
      new Date(endDate).getDate() > new Date().getDate() &&
      status === "Completed"
    ) {
      toast.error("Sorry, this reservation cant be deleted till end Date");
      return;
    }
    const result = await DeleteReservation(id);
    if (result === true) {
      toast.success("Review deleted Successfully");
    } else {
      toast.error("Error occured when deleting reservation");
    }
  };
  return (
    <div className="text-default-800">
      <>
        <Modal
          onClose={() => setReserveDeletePropmt(false)}
          isOpen={reviewdeletePropmt}
        >
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              Deete Review
            </ModalHeader>
            <ModalBody>
              <h1>
                Are you sure u want to delete reservation That start on :{" "}
                {new Date(deleteReserve.startDate).toDateString()} and end on :{" "}
                {new Date(deleteReserve.endDate).toDateString()}
              </h1>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => setReserveDeletePropmt(false)}
                size="sm"
              >
                No
              </Button>
              <Button
                size="sm"
                className="bg-carton text-black"
                onPress={() => {
                  setReserveDeletePropmt(false);
                  handleReserveDelete(
                    deleteReserve.reserveId,
                    deleteReserve.status
                  );
                }}
              >
                Yes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <Card className="text-default-800">
        <h1 className="text-2xl font-bold my-3 text-center">Reservation</h1>
        <Card className="p-5 text-default-800">
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>S/N</TableColumn>
              <TableColumn>START DATE</TableColumn>
              <TableColumn>END DATE</TableColumn>
              <TableColumn>PRICE</TableColumn>
              <TableColumn>STATUS</TableColumn>
              <TableColumn>ACTION</TableColumn>
            </TableHeader>
            <TableBody>
              <>
                {AllReservation.map((eachReserve, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        {new Date(eachReserve.startDate).toDateString()}
                      </TableCell>
                      <TableCell>
                        {new Date(eachReserve.endDate).toDateString()}
                      </TableCell>
                      <TableCell className="line-clamp-1">
                        {new Intl.NumberFormat("en-NG", {
                          style: "currency",
                          currency: "NGN",
                        }).format(eachReserve.price)}
                      </TableCell>
                      <TableCell>{eachReserve.status}</TableCell>
                      <TableCell>
                        <MdDelete
                          size={25}
                          color="red"
                          className="cursor-pointer"
                          onClick={() => {
                            setDeleteReserve((prevData) => {
                              return {
                                ...prevData,
                                startDate: new Date(
                                  eachReserve.startDate
                                ).toDateString(),
                                endDate: new Date(
                                  eachReserve.endDate
                                ).toDateString(),
                                reserveId: eachReserve.id,
                                status: eachReserve.status,
                              };
                            });
                            setReserveDeletePropmt(true);
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

export default AdminReservation;
