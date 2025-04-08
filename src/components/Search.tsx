"use client";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";

type SetFilteredByProps = {
  setFilteredBy: React.Dispatch<
    React.SetStateAction<{
      name: string;
      value: string;
    }>
  >;
  setSearchRoom: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({
  setFilteredBy,
  setSearchRoom,
}: SetFilteredByProps) {
  const [Open, setOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [placeHolderProps, setPlaceHolderProps] = useState({
    name: "",
    value: "",
  });

  const handleChange = (
    name: string,
    value: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked === true) {
      setFilteredBy((prevData) => {
        return {
          ...prevData,
          name: name,
          value: value,
        };
      });
      setPlaceHolderProps((prevData) => {
        return {
          ...prevData,
          name: name,
          value: value,
        };
      });
    }
  };

  return (
    <div className="mb-3">
      <div className="flex w-[95%] mx-auto items-center">
        <div
          className={`overflow-hidden inline-flex items-center transition-all duration-500 ${
            Open ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
        >
          <button
            onClick={() => onOpen()}
            className="mr-2 p-3 bg-carton text-black rounded-md"
          >
            <FaFilter size={25} />
          </button>
          <Input
            type="text"
            label={
              placeHolderProps.name
                ? `Search by ${placeHolderProps.name}`
                : `Search by Room Name`
            }
            placeholder={
              placeHolderProps.name
                ? `Search by ${placeHolderProps.name}`
                : `Search by Room Name`
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchRoom(e.target.value);
            }}
            size="sm"
          />
        </div>
        <button
          onClick={() => setOpen(!Open)}
          className="ml-2 p-3 bg-carton text-black rounded-md"
        >
          <FaSearch size={25} />
        </button>
      </div>
      <Drawer
        size="xs"
        isOpen={isOpen}
        placement="left"
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Filter by
              </DrawerHeader>
              <DrawerBody>
                <div className="flex flex-col gap-3">
                  <div className="flex border-gray-300 border px-3 py-3 rounded-md justify-between items-center">
                    <h1 className="font-semibold">Room Name</h1>
                    <Input
                      size="sm"
                      type="radio"
                      checked={placeHolderProps.value == "name" ? true : false}
                      name="filter"
                      value={"name"}
                      className="w-min cursor-pointer"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange("Room Name", "name", e);
                      }}
                    />
                  </div>
                  <div className="flex border-gray-300 border px-3 py-3 rounded-md justify-between items-center">
                    <h1 className="font-semibold">Room Price</h1>
                    <Input
                      size="sm"
                      type="radio"
                      checked={
                        placeHolderProps.value == "price_per_night"
                          ? true
                          : false
                      }
                      name="filter"
                      value={"price_per_night"}
                      className="w-min cursor-pointer"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange("Room Price", "price_per_night", e);
                      }}
                    />
                  </div>
                  <div className="flex border-gray-300 border px-3 py-3 rounded-md justify-between items-center">
                    <h1 className="font-semibold">Room Description</h1>
                    <Input
                      size="sm"
                      type="radio"
                      checked={
                        placeHolderProps.value == "description" ? true : false
                      }
                      name="filter"
                      value={"description"}
                      className="w-min cursor-pointer"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange("Room Description", "description", e);
                      }}
                    />
                  </div>
                  <div className="flex border-gray-300 border px-3 py-3 rounded-md justify-between items-center">
                    <h1 className="font-semibold">Room Size</h1>
                    <Input
                      size="sm"
                      type="radio"
                      checked={
                        placeHolderProps.value == "room_size" ? true : false
                      }
                      name="filter"
                      value={"room_size"}
                      className="w-min cursor-pointer"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange("Room Size", "room_size", e);
                      }}
                    />
                  </div>
                  <div className="flex border-gray-300 border px-3 py-3 rounded-md justify-between items-center">
                    <h1 className="font-semibold">Bed Type</h1>
                    <Input
                      size="sm"
                      type="radio"
                      checked={
                        placeHolderProps.value == "bed_type" ? true : false
                      }
                      name="filter"
                      value={"bed_type"}
                      className="w-min cursor-pointer"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange("Bed Type", "bed_type", e);
                      }}
                    />
                  </div>
                  <div className="flex border-gray-300 border px-3 py-3 rounded-md justify-between items-center">
                    <h1 className="font-semibold">Max Occupancy</h1>
                    <Input
                      size="sm"
                      type="radio"
                      checked={
                        placeHolderProps.value == "max_occupancy" ? true : false
                      }
                      name="filter"
                      value={"max_occupancy"}
                      className="w-min cursor-pointer"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange("Max Occupancy", "max_occupancy", e);
                      }}
                    />
                  </div>
                  <div className="flex border-gray-300 border px-3 py-3 rounded-md justify-between items-center">
                    <h1 className="font-semibold">Amenities</h1>
                    <Input
                      size="sm"
                      type="radio"
                      checked={
                        placeHolderProps.value == "amenities" ? true : false
                      }
                      name="filter"
                      value={"amenities"}
                      className="w-min cursor-pointer"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange("Amenities", "amenities", e);
                      }}
                    />
                  </div>
                </div>
              </DrawerBody>
              <DrawerFooter className="flex flex-row justify-between items-center">
                <Button
                  className="bg-carton text-black font-semibold"
                  // onPress={()=>handleClear()}
                  size="sm"
                >
                  Clear
                </Button>
                
                <Button
                  className="bg-carton text-black font-semibold"
                  onPress={onClose}
                  size="sm"
                >
                  Done
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
