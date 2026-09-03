import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/db/db.js";
import Region from "./src/models/Region.js";
import CraftCategory from "./src/models/CraftCategory.js";
import Artisan from "./src/models/Artisan.js";

const regionsData = [
  { name: "Kutch", state: "Gujarat", description: "Home to Bandhani tie-dye and leather craft traditions" },
  { name: "Mithila", state: "Bihar", description: "Birthplace of Madhubani folk painting" },
  { name: "Jaipur", state: "Rajasthan", description: "Known for Blue Pottery, Persian-influenced glazed ceramics" },
  { name: "Channapatna", state: "Karnataka", description: "GI-tagged lacquered wooden toy-making town" },
  { name: "Bidar", state: "Karnataka", description: "Origin of Bidriware metal inlay craft" },
  { name: "Bastar", state: "Chhattisgarh", description: "Tribal belt known for Dhokra lost-wax metal casting" },
  { name: "Moradabad", state: "Uttar Pradesh", description: "Known as the 'Brass City of India'" },
];

const craftsData = [
  { name: "Bandhani", description: "Traditional tie-dye textile art, signature craft of Kutch, Gujarat" },
  { name: "Madhubani Painting", description: "Folk painting style using natural pigments and bold linework, GI-tagged (95/2007)" },
  { name: "Blue Pottery", description: "Persian-influenced glazed pottery from Jaipur, GI-tagged (80/2009)" },
  { name: "Channapatna Toys", description: "Lacquered wooden toys and dolls, GI-tagged (52/2005)" },
  { name: "Bidriware", description: "Blackened zinc-copper alloy inlaid with pure silver, Persian-influenced technique" },
  { name: "Bastar Dhokra", description: "Lost-wax metal casting technique, tribal art form, GI-tagged (129/2008)" },
  { name: "Moradabad Metal Craft", description: "Brass and metal engraving craft, GI-tagged (147/2012)" },
];

const artisansData = [
  {
    name: "Karan Bhoja Marvada",
    bio: "Recognised by the Ministry of Textiles for expert leather craftsmanship using traditional Jari Kaam and Torni techniques.",
    craftName: "Bandhani",
    regionName: "Kutch",
    experienceYears: 20,
    workshopAddress: "Kutch district, Gujarat",
    contactPhone: "",
    contactEmail: "",
    techniques: "Jari Kaam and Torni leather craftsmanship techniques",
    isVerified: true,
  },
  {
    name: "Uzma Khatoon",
    bio: "Metal craft artisan from Moradabad, engaged in metal engraving since childhood; has trained many women artisans in the craft.",
    craftName: "Moradabad Metal Craft",
    regionName: "Moradabad",
    experienceYears: 15,
    workshopAddress: "Moradabad, Uttar Pradesh",
    contactPhone: "",
    contactEmail: "",
    techniques: "Hand metal engraving",
    isVerified: true,
  },
  {
    name: "Bajrang Lal Suthar",
    bio: "Painting craft artisan from Bikaner honoured by the Ministry of Textiles for continuing his craft despite physical disability.",
    craftName: "Madhubani Painting",
    regionName: "Jaipur",
    experienceYears: 25,
    workshopAddress: "Bikaner, Rajasthan",
    contactPhone: "",
    contactEmail: "",
    techniques: "Traditional hand painting",
    isVerified: true,
  },
  {
    name: "Hannah Marak",
    bio: "Expert weaver from Kamrup district specialising in Eri silk handloom production.",
    craftName: "Bandhani",
    regionName: "Kutch",
    experienceYears: 18,
    workshopAddress: "Kamrup district, Assam",
    contactPhone: "",
    contactEmail: "",
    techniques: "Eri silk handloom weaving",
    isVerified: true,
  },
];

const seed = async () => {
  await connectDB();

  console.log("Clearing existing data...");
  await Promise.all([Region.deleteMany(), CraftCategory.deleteMany(), Artisan.deleteMany()]);

  console.log("Inserting regions...");
  const regions = await Region.insertMany(regionsData);

  console.log("Inserting craft categories...");
  const crafts = await CraftCategory.insertMany(craftsData);

  console.log("Inserting artisans...");
  const artisanDocs = artisansData.map((a) => {
    const region = regions.find((r) => r.name === a.regionName);
    const craft = crafts.find((c) => c.name === a.craftName);
    return {
      name: a.name,
      bio: a.bio,
      region: region._id,
      craftCategory: craft._id,
      experienceYears: a.experienceYears,
      workshopAddress: a.workshopAddress,
      contactPhone: a.contactPhone,
      contactEmail: a.contactEmail,
      techniques: a.techniques,
      isVerified: a.isVerified,
    };
  });
  await Artisan.insertMany(artisanDocs);

  console.log("Seeding complete!");
  process.exit(0);
};

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});