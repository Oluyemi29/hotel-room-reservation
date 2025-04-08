"use client";
import { DeletingRoom } from "@/app/api/Action";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  CardBody,
  Image,
  CardFooter,
} from "@heroui/react";
import toast from "react-hot-toast";

type DeleteFormProps = {
  setOpenIt: React.Dispatch<React.SetStateAction<boolean>>;
  openIt: boolean;
  id: string;
  name: string;
  price: number;
  description: string;
  imageLink: string;
};

export default function DeleteRoom({
  setOpenIt,
  openIt,
  id,
  name,
  price,
  description,
  imageLink,
}: DeleteFormProps) {
  const handleDelete = async () => {
    const response = await DeletingRoom(id);
    if (response === true) {
      setOpenIt(false);
      toast.success(`Room ${name} Deleted Successfully`);
    } else {
      toast.error(`Error when deleting ${name}`);
      setOpenIt(false);
    }
  };
  return (
    <>
      <Modal
        onClose={() => setOpenIt(false)}
        className="z-30 absolute"
        isOpen={openIt}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Delete {name} Room
          </ModalHeader>
          <ModalBody>
            <Card shadow="sm" className="p-3">
              <h1 className="mb-3 font-semibold italic">
                Are you sure , you want to delete this Room?
              </h1>
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={name}
                  className="w-full object-cover h-48"
                  radius="lg"
                  shadow="sm"
                  src={imageLink}
                  width="100%"
                />
              </CardBody>
              <CardFooter className="text-small flex flex-col gap-2">
                <div className="flex w-full justify-between">
                  <p className="text-default-500 font-semibold text-medium">
                    {name}
                  </p>
                  <p className="text-default-500">
                    {new Intl.NumberFormat("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    }).format(price)}
                  </p>
                </div>
                <p className="text-default-500">{description}</p>
              </CardFooter>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              variant="light"
              onPress={() => setOpenIt(false)}
            >
              Cancel
            </Button>
            <Button color="primary" onPress={() => handleDelete()}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
