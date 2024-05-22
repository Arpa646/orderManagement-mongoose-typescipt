
import mongoose from 'mongoose';
import app from './app';

async function main() {
  try {
    await mongoose.connect("mongodb+srv://Student:GU75RBybzesMXGkH@my-server.9ukzdqb.mongodb.net/first-project?retryWrites=true&w=majority&appName=my-server", {
  
    });

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

main();
