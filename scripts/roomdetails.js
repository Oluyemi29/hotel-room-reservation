const RoomArray = [
  {
    name: "Deluxe Room",
    price_per_night: 30000,
    description:
      "A stylish and comfortable room with modern amenities and a cozy atmosphere.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400284/crystalhotel/orpomr8kkmdomnk3bjy7.jpg",
    room_size: "35 sqm",
    bed_type: "Queen-size",
    max_occupancy: 2,
    amenities: [
      "Free Wi-Fi",
      "Flat-screen TV",
      "Work Desk",
      "Air Conditioning",
    ],
  },
  {
    name: "Executive Suite",
    price_per_night: 50000,
    description:
      "A spacious suite with a separate living area, luxurious furnishings, and a stunning view.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400284/crystalhotel/ogfbcupdzhvswc8fl4r9.jpg",
    room_size: "60 sqm",
    bed_type: "King-size",
    max_occupancy: 3,
    amenities: [
      "Free Wi-Fi",
      "Smart TV",
      "Mini-bar",
      "Balcony",
      "Air Conditioning",
    ],
  },
  {
    name: "Presidential Suite",
    price_per_night: 100000,
    description:
      "An exclusive suite with premium luxury, private lounge, and VIP services.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400285/crystalhotel/st0xsg5wqcvkpee494mx.jpg",
    room_size: "100 sqm",
    bed_type: "King-size",
    max_occupancy: 4,
    amenities: [
      "Private Butler",
      "Jacuzzi",
      "Home Theater",
      "Mini-bar",
      "Balcony",
    ],
  },
  {
    name: "Standard Room",
    price_per_night: 24000,
    description:
      "A comfortable and budget-friendly room with essential amenities.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400285/crystalhotel/lzhtaej3biv4zqmhpavl.jpg",
    room_size: "30 sqm",
    bed_type: "Double",
    max_occupancy: 2,
    amenities: [
      "Free Wi-Fi",
      "Flat-screen TV",
      "Air Conditioning",
      "Room Service",
    ],
  },
  {
    name: "Family Suite",
    price_per_night: 56000,
    description:
      "A spacious suite ideal for families, with multiple beds and extra comfort.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400285/crystalhotel/gkf5fhfylvcb85fqpfo9.jpg",
    room_size: "75 sqm",
    bed_type: "2 Queen-size",
    max_occupancy: 5,
    amenities: ["Kids' Play Area", "Free Wi-Fi", "Mini-bar", "Balcony"],
  },
  {
    name: "Luxury Penthouse",
    price_per_night: 120000,
    description:
      "A top-floor penthouse with a breathtaking city view and world-class luxury.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400285/crystalhotel/dehpwsuuqatsxnq2ct3z.jpg",
    room_size: "120 sqm",
    bed_type: "King-size",
    max_occupancy: 4,
    amenities: [
      "Rooftop Terrace",
      "Private Bar",
      "Jacuzzi",
      "Exclusive Lounge Access",
    ],
  },
  {
    name: "Honeymoon Suite",
    price_per_night: 70000,
    description:
      "A romantic suite designed for couples, featuring a private jacuzzi and scenic views.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400288/crystalhotel/eiubuqeebixsd2kd4sbt.jpg",
    room_size: "70 sqm",
    bed_type: "King-size",
    max_occupancy: 2,
    amenities: [
      "Private Jacuzzi",
      "Candlelight Dinner Setup",
      "Free Champagne",
      "Balcony",
    ],
  },
  {
    name: "Business Class Room",
    price_per_night: 40000,
    description:
      "A premium room tailored for business travelers with workspace and high-speed internet.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400284/crystalhotel/cg3gqy3ajquq5od5eqj4.jpg",
    room_size: "40 sqm",
    bed_type: "King-size",
    max_occupancy: 2,
    amenities: [
      "High-speed Wi-Fi",
      "Work Desk",
      "Meeting Room Access",
      "Coffee Maker",
    ],
  },
  {
    name: "Garden View Room",
    price_per_night: 36000,
    description:
      "A cozy room with a relaxing garden view, perfect for nature lovers.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400284/crystalhotel/iuliajwami7l2a3mwgd3.jpg",
    room_size: "45 sqm",
    bed_type: "Queen-size",
    max_occupancy: 2,
    amenities: [
      "Garden View",
      "Private Balcony",
      "Flat-screen TV",
      "Air Conditioning",
    ],
  },
  {
    name: "Oceanfront Villa",
    price_per_night: 140000,
    description:
      "A private villa with direct access to the beach and a stunning ocean view.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400288/crystalhotel/ooarjkinbqzmykabxkxw.jpg",
    room_size: "150 sqm",
    bed_type: "King-size",
    max_occupancy: 6,
    amenities: [
      "Private Pool",
      "Beach Access",
      "Outdoor Lounge",
      "Luxury Spa Services",
    ],
  },
  {
    name: "Classic Twin Room",
    price_per_night: 26000,
    description:
      "A cozy twin-bedded room perfect for friends or colleagues traveling together.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400290/crystalhotel/vtkd7mlrccdlwlah4bq2.jpg",
    room_size: "32 sqm",
    bed_type: "2 Twin Beds",
    max_occupancy: 2,
    amenities: [
      "Free Wi-Fi",
      "Flat-screen TV",
      "Air Conditioning",
      "Room Service",
    ],
  },
  {
    name: "Skyline Suite",
    price_per_night: 90000,
    description:
      "An elegant suite on a high floor with a breathtaking city skyline view.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400292/crystalhotel/ahqpjzs5mahttawwj0nr.jpg",
    room_size: "85 sqm",
    bed_type: "King-size",
    max_occupancy: 3,
    amenities: [
      "Floor-to-ceiling Windows",
      "Lounge Area",
      "Mini-bar",
      "Smart TV",
    ],
  },
  {
    name: "Budget Single Room",
    price_per_night: 18000,
    description:
      "A compact and affordable option for solo travelers on a budget.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400290/crystalhotel/jtjw3kfkqvqf0t8ky40h.jpg",
    room_size: "25 sqm",
    bed_type: "Single",
    max_occupancy: 1,
    amenities: [
      "Free Wi-Fi",
      "Flat-screen TV",
      "Work Desk",
      "Basic Toiletries",
    ],
  },
  {
    name: "Superior King Room",
    price_per_night: 42000,
    description:
      "A well-designed king room with extra space and luxurious bedding.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400285/crystalhotel/gg14l5o4v0i6fszy5t3i.jpg",
    room_size: "50 sqm",
    bed_type: "King-size",
    max_occupancy: 2,
    amenities: [
      "Smart TV",
      "Luxury Bathrobes",
      "Coffee Machine",
      "Air Conditioning",
    ],
  },
  {
    name: "Mountain View Suite",
    price_per_night: 70000,
    description:
      "A beautiful suite offering a stunning mountain view and a relaxing stay.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400285/crystalhotel/gg14l5o4v0i6fszy5t3i.jpg",
    room_size: "78 sqm",
    bed_type: "King-size",
    max_occupancy: 4,
    amenities: [
      "Private Balcony",
      "Fireplace",
      "Mini-bar",
      "24/7 Room Service",
    ],
  },
  {
    name: "Poolside Bungalow",
    price_per_night: 96000,
    description:
      "A private bungalow with direct access to the swimming pool and outdoor lounge.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400284/crystalhotel/w7snpucvk9ftyq35k9mh.jpg",
    room_size: "90 sqm",
    bed_type: "King-size",
    max_occupancy: 4,
    amenities: [
      "Private Pool Access",
      "Outdoor Seating",
      "Mini-bar",
      "Luxury Bath",
    ],
  },
  {
    name: "Luxury Loft",
    price_per_night: 64000,
    description:
      "A modern loft with open-plan design and sophisticated decor for a premium stay.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400285/crystalhotel/y74isauk8ixqt7agfnay.jpg",
    room_size: "72 sqm",
    bed_type: "King-size",
    max_occupancy: 3,
    amenities: ["Loft-style Layout", "High Ceilings", "Work Desk", "Mini-bar"],
  },
  {
    name: "Royal Chamber",
    price_per_night: 110000,
    description:
      "A grand chamber with elegant furniture and a royal-like experience.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400288/crystalhotel/wwvk7fvyvs69vnbgghhf.jpg",
    room_size: "110 sqm",
    bed_type: "King-size",
    max_occupancy: 4,
    amenities: [
      "Luxury Furnishings",
      "Private Butler",
      "VIP Lounge Access",
      "Jacuzzi",
    ],
  },
  {
    name: "Eco-Friendly Room",
    price_per_night: 38000,
    description:
      "A sustainable room designed with eco-conscious materials and green energy solutions.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400286/crystalhotel/yxffcoqu1dzcfgkwy0ya.jpg",
    room_size: "40 sqm",
    bed_type: "Queen-size",
    max_occupancy: 2,
    amenities: [
      "Solar-powered Lighting",
      "Organic Linens",
      "Smart Thermostat",
      "Air Purifier",
    ],
  },
  {
    name: "Japanese Zen Suite",
    price_per_night: 84000,
    description:
      "A tranquil suite designed with Japanese aesthetics and a private meditation area.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400286/crystalhotel/plqmmjoljbnrjhsfd4im.jpg",
    room_size: "80 sqm",
    bed_type: "Tatami Futon",
    max_occupancy: 3,
    amenities: [
      "Traditional Japanese Decor",
      "Tea Ceremony Set",
      "Shoji Screens",
      "Indoor Garden",
    ],
  },
  {
    name: "Deluxe Queen Room",
    price_per_night: 36000,
    description:
      "A stylish and spacious room with modern decor, perfect for a relaxing stay.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400285/crystalhotel/i1ej0ztziuqcxgamkw1z.jpg",
    room_size: "42 sqm",
    bed_type: "Queen-size",
    max_occupancy: 2,
    amenities: ["Free Wi-Fi", "Smart TV", "Mini-bar", "Air Conditioning"],
  },
  {
    name: "Oceanfront Suite",
    price_per_night: 98000,
    description:
      "A stunning suite with breathtaking ocean views and a private terrace.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400289/crystalhotel/wbwq3idotze8rwmg2wft.jpg",
    room_size: "88 sqm",
    bed_type: "King-size",
    max_occupancy: 4,
    amenities: [
      "Private Terrace",
      "Ocean View",
      "Jacuzzi Tub",
      "24/7 Room Service",
    ],
  },
  {
    name: "Business Class Room",
    price_per_night: 44000,
    description:
      "A modern room designed for business travelers with a dedicated workspace.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400292/crystalhotel/alh2wu1zkzsmf9kv4ckk.jpg",
    room_size: "45 sqm",
    bed_type: "Queen-size",
    max_occupancy: 2,
    amenities: [
      "Ergonomic Work Desk",
      "High-speed Wi-Fi",
      "Coffee Maker",
      "Smart TV",
    ],
  },
  {
    name: "Family Suite",
    price_per_night: 62000,
    description:
      "A spacious suite perfect for families, featuring a separate kids' area.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400288/crystalhotel/er5iqu7wm4ryadbkdstx.jpg",
    room_size: "75 sqm",
    bed_type: "2 Queen Beds",
    max_occupancy: 5,
    amenities: ["Kids Play Area", "Smart TV", "Mini-kitchen", "Free Wi-Fi"],
  },
  {
    name: "Penthouse Suite",
    price_per_night: 150000,
    description:
      "The ultimate luxury experience with a private rooftop terrace and exclusive services.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400288/crystalhotel/medvignffxy907xuboo0.jpg",
    room_size: "150 sqm",
    bed_type: "King-size",
    max_occupancy: 4,
    amenities: ["Rooftop Access", "Private Butler", "Jacuzzi", "Luxury Bar"],
  },
  {
    name: "Honeymoon Suite",
    price_per_night: 90000,
    description:
      "A romantic getaway suite with elegant decor and a private hot tub.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400291/crystalhotel/j89gztcslcrxzqdnvdks.jpg",
    room_size: "85 sqm",
    bed_type: "King-size",
    max_occupancy: 2,
    amenities: [
      "Private Hot Tub",
      "Champagne Service",
      "Luxury Bathrobes",
      "Mood Lighting",
    ],
  },
  {
    name: "Vintage Royal Room",
    price_per_night: 72000,
    description:
      "A vintage-themed room with classic decor and royal-style furnishings.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400291/crystalhotel/damks0d1ab6hrcepzemb.jpg",
    room_size: "68 sqm",
    bed_type: "Queen-size",
    max_occupancy: 3,
    amenities: [
      "Antique Furniture",
      "Classic Chandeliers",
      "Luxury Linens",
      "Mini-bar",
    ],
  },
  {
    name: "Desert Retreat Room",
    price_per_night: 54000,
    description:
      "A peaceful retreat inspired by desert landscapes and warm tones.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400292/crystalhotel/u3jyyjpksnjszua0oyvw.jpg",
    room_size: "55 sqm",
    bed_type: "King-size",
    max_occupancy: 2,
    amenities: [
      "Desert View",
      "Private Patio",
      "Eco-friendly Amenities",
      "Smart TV",
    ],
  },
  {
    name: "Rainforest Suite",
    price_per_night: 96000,
    description:
      "A nature-inspired suite surrounded by lush greenery and natural elements.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400291/crystalhotel/nhps4eulxgevvenowexr.jpg",
    room_size: "92 sqm",
    bed_type: "King-size",
    max_occupancy: 3,
    amenities: [
      "Private Balcony",
      "Rain Shower",
      "Nature Sounds System",
      "Organic Toiletries",
    ],
  },
  {
    name: "Artistic Loft",
    price_per_night: 70000,
    description:
      "A creatively designed loft with artistic decor and a unique atmosphere.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400289/crystalhotel/rjogkc6fsf23djse6ks8.jpg",
    room_size: "70 sqm",
    bed_type: "Queen-size",
    max_occupancy: 2,
    amenities: [
      "Artistic Murals",
      "Custom Furniture",
      "Mini-bar",
      "Smart Lighting",
    ],
  },
  {
    name: "Skyline View Room",
    price_per_night: 80000,
    description:
      "Enjoy breathtaking city skyline views from this elegantly designed room.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400293/crystalhotel/rr308yconqetxoozuxvu.jpg",
    room_size: "60 sqm",
    bed_type: "King-size",
    max_occupancy: 2,
    amenities: ["Panoramic Windows", "Luxury Linens", "Mini-bar", "Smart TV"],
  },
  {
    name: "Cozy Cabin Room",
    price_per_night: 40000,
    description:
      "A warm and inviting room with wooden interiors for a rustic experience.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400292/crystalhotel/ocme8miepsf6eyajvssu.jpg",
    room_size: "48 sqm",
    bed_type: "Queen-size",
    max_occupancy: 2,
    amenities: ["Fireplace", "Wooden Decor", "Balcony", "Coffee Maker"],
  },
  {
    name: "Luxury Poolside Suite",
    price_per_night: 104000,
    description:
      "A premium suite with direct pool access and a private lounging area.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400294/crystalhotel/owmse1ycojmnrftxtovx.jpg",
    room_size: "90 sqm",
    bed_type: "King-size",
    max_occupancy: 4,
    amenities: ["Private Pool Access", "Sun Loungers", "Mini-bar", "Smart TV"],
  },
  {
    name: "Modern Minimalist Room",
    price_per_night: 48000,
    description:
      "A sleek and modern room with minimalist decor and high-tech features.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400290/crystalhotel/edxw0rvcvyvshjzpjmxh.jpg",
    room_size: "50 sqm",
    bed_type: "Queen-size",
    max_occupancy: 2,
    amenities: [
      "Smart Lighting",
      "Touchscreen Controls",
      "Luxury Linens",
      "Free Wi-Fi",
    ],
  },
  {
    name: "Japanese Zen Suite",
    price_per_night: 76000,
    description:
      "A tranquil retreat inspired by Japanese Zen aesthetics and simplicity.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400293/crystalhotel/bishetojn5fpgbswqs7y.jpg",
    room_size: "70 sqm",
    bed_type: "Tatami & Futon",
    max_occupancy: 3,
    amenities: ["Shoji Screens", "Indoor Garden", "Tea Set", "Mood Lighting"],
  },
  {
    name: "Bohemian Loft",
    price_per_night: 52000,
    description:
      "A colorful and artistic loft with vibrant decor and a cozy ambiance.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400290/crystalhotel/hu6awrztsjeki7fff0xb.jpg",
    room_size: "65 sqm",
    bed_type: "Queen-size",
    max_occupancy: 2,
    amenities: ["Hammock Chair", "Boho Decor", "Mini-bar", "Smart TV"],
  },
  {
    name: "Safari Adventure Room",
    price_per_night: 56000,
    description:
      "An exotic safari-themed room with nature-inspired decor and warm tones.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400294/crystalhotel/tbnz5kjpbnetolr25dbg.jpg",
    room_size: "58 sqm",
    bed_type: "King-size",
    max_occupancy: 2,
    amenities: [
      "Animal Print Decor",
      "Rainforest Sound System",
      "Mini-bar",
      "Smart TV",
    ],
  },
  {
    name: "Mountain Lodge Suite",
    price_per_night: 82000,
    description:
      "A cozy mountain lodge with a fireplace and a breathtaking mountain view.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400291/crystalhotel/ib5ruip0ickcdxqjy6mo.jpg",
    room_size: "85 sqm",
    bed_type: "King-size",
    max_occupancy: 3,
    amenities: [
      "Fireplace",
      "Wooden Interiors",
      "Private Balcony",
      "Luxury Linens",
    ],
  },
  {
    name: "Presidential Suite",
    price_per_night: 200000,
    description:
      "An opulent suite with VIP treatment and state-of-the-art facilities.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400293/crystalhotel/gz6nyoxmy5iy7gqxypbw.jpg",
    room_size: "200 sqm",
    bed_type: "California King",
    max_occupancy: 5,
    amenities: [
      "Private Butler",
      "Luxury Jacuzzi",
      "Personal Office",
      "24/7 Room Service",
    ],
  },
  {
    name: "Tropical Paradise Room",
    price_per_night: 72000,
    description:
      "A relaxing island-inspired room with tropical decor and a beachy vibe.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400294/crystalhotel/kguqdwt2wul1fimu0s00.jpg",
    room_size: "72 sqm",
    bed_type: "Queen-size",
    max_occupancy: 2,
    amenities: [
      "Palm Tree Decor",
      "Beachfront View",
      "Mini-bar",
      "Luxury Linens",
    ],
  },
  {
    name: "Ocean Breeze Suite",
    price_per_night: 90000,
    description:
      "Wake up to the soothing sound of waves in this ocean-facing luxury suite.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400294/crystalhotel/xkzjawzlsv1rqi1tvgoa.jpg",
    room_size: "80 sqm",
    bed_type: "King-size",
    max_occupancy: 3,
    amenities: ["Ocean View", "Private Balcony", "Luxury Bathtub", "Mini-bar"],
  },
  {
    name: "Royal Penthouse",
    price_per_night: 240000,
    description:
      "An ultra-luxurious penthouse with panoramic views and world-class services.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400293/crystalhotel/cekxz9qubbif1pxqn9gq.jpg",
    room_size: "250 sqm",
    bed_type: "California King",
    max_occupancy: 6,
    amenities: [
      "Private Terrace",
      "Butler Service",
      "Jacuzzi",
      "Smart Home Controls",
    ],
  },
  {
    name: "Art Deco Room",
    price_per_night: 64000,
    description:
      "A stylish room with retro art deco decor and modern comforts.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400294/crystalhotel/sa38guu0cef1jqcrgq5l.jpg",
    room_size: "55 sqm",
    bed_type: "Queen-size",
    max_occupancy: 2,
    amenities: ["Vintage Decor", "Smart TV", "Luxury Linens", "Mini-bar"],
  },
  {
    name: "Sunset Retreat",
    price_per_night: 78000,
    description:
      "A romantic getaway with stunning sunset views and warm interiors.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400293/crystalhotel/mbju0wzp4awasg35dfdh.jpg",
    room_size: "68 sqm",
    bed_type: "King-size",
    max_occupancy: 2,
    amenities: [
      "Private Terrace",
      "Sunset View",
      "Fireplace",
      "Luxury Bathtub",
    ],
  },
  {
    name: "Mediterranean Haven",
    price_per_night: 86000,
    description:
      "A beautifully designed room inspired by Mediterranean coastal living.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400292/crystalhotel/mlvsuwhgb8fhd5tqtvit.jpg",
    room_size: "74 sqm",
    bed_type: "King-size",
    max_occupancy: 3,
    amenities: ["Private Patio", "Blue & White Theme", "Smart TV", "Mini-bar"],
  },
  {
    name: "Business Executive Room",
    price_per_night: 56000,
    description:
      "Perfect for business travelers with a dedicated workspace and high-speed internet.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400292/crystalhotel/rf5n0byfhu3zxlyhwpvm.jpg",
    room_size: "50 sqm",
    bed_type: "Queen-size",
    max_occupancy: 2,
    amenities: [
      "Work Desk",
      "High-speed Wi-Fi",
      "Meeting Space",
      "Luxury Linens",
    ],
  },
  {
    name: "Garden View Suite",
    price_per_night: 62000,
    description:
      "Relax in a peaceful setting with a beautiful view of the lush gardens.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400294/crystalhotel/mk0bgzvtjqa1dtznlaom.jpg",
    room_size: "65 sqm",
    bed_type: "King-size",
    max_occupancy: 2,
    amenities: ["Garden View", "Private Balcony", "Mini-bar", "Luxury Bathtub"],
  },
  {
    name: "Loft-Style Studio",
    price_per_night: 52000,
    description:
      "A modern loft-style room with industrial decor and an open-plan design.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400294/crystalhotel/uz92hckgkkguzvjle2xl.jpg",
    room_size: "58 sqm",
    bed_type: "Queen-size",
    max_occupancy: 2,
    amenities: ["Loft Design", "Exposed Brick Walls", "Smart TV", "Mini-bar"],
  },
  {
    name: "Serenity Spa Room",
    price_per_night: 96000,
    description:
      "A wellness-focused room with an in-room spa and calming ambiance.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400293/crystalhotel/rscpnlo9x9rlsmen6nkb.jpg",
    room_size: "75 sqm",
    bed_type: "King-size",
    max_occupancy: 3,
    amenities: [
      "Private Spa",
      "Relaxation Lounge",
      "Aromatherapy",
      "Smart Lighting",
    ],
  },
  {
    name: "Retro Glam Suite",
    price_per_night: 68000,
    description:
      "Step into a glamorous retro-themed suite with vintage luxury at its finest.",
    image:
      "https://res.cloudinary.com/devoluyemi/image/upload/v1743400294/crystalhotel/zqdkzamjgmwbjcfnlp6v.jpg",
    room_size: "62 sqm",
    bed_type: "Queen-size",
    max_occupancy: 2,
    amenities: ["Retro Furniture", "Neon Lights", "Mini-bar", "Smart TV"],
  },
];

module.exports = { RoomArray };
