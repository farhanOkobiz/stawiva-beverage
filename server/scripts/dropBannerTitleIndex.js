require('dotenv').config();
const mongoose = require('mongoose');

(async () => {
  try {
    const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
    await mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    const collection = mongoose.connection.collection('banners');
    const indexes = await collection.indexes();
    console.log('Existing indexes:', indexes.map(i => i.name));

    const idx = indexes.find(i => i.name === 'title_1');
    if (!idx) {
      console.log('Index title_1 not found — nothing to drop.');
    } else {
      await collection.dropIndex('title_1');
      console.log('Dropped index title_1 successfully.');
    }

    await mongoose.disconnect();
    console.log('Disconnected.');
  } catch (err) {
    console.error('Error:', err.message || err);
    process.exit(1);
  }
})();
