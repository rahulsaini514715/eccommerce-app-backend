import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("Category", categorySchema);




/*
🔸 Slug ek readable URL string hoti hai jo kisi item (jaise category ya product) ko URL mein use karne ke liye banayi jaati hai.
🔹 Example:
Agar aapki category ka naam hai:

"Men's Wear"
Toh uska slug kuch aisa hoga:
mens-wear

❓ Slug kyun use hota hai?
✅ SEO friendly URL banane ke liye
Example:
https://bookevent.com/category/mens-wear

✅ Readable & clean URLs ke liye
Na ki aise: https://bookevent.com/category/63bd2a0ab

✅ Duplicate avoid karne ke liye – ek unique reference milta hai.

🔧 Slug kaise generate karte hain?
Slug usually name field se generate hota hai. Aap slugify package ka use kar sakte ho.
*/