// eslint-disable-next-line @typescript-eslint/no-require-imports
const { RoomArray } = require("./../scripts/roomdetails") ;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require( "@prisma/client");

const prisma = new PrismaClient();

const runmain = async () => {
  await Promise.all(
    RoomArray.map(async (EachItem) => {
      return await prisma.room.create({
        data: {
          bed_type: EachItem.bed_type,
          description: EachItem.description,
          image: EachItem.image,
          max_occupancy: EachItem.max_occupancy,
          name: EachItem.name,
          price_per_night: EachItem.price_per_night,
          room_size: EachItem.room_size,
          amenities: EachItem.amenities,
        },
      });
    })
  );
};
runmain()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log("Error while seeding database", e);
    await prisma.$disconnect();
    process.exit(1);
  });
