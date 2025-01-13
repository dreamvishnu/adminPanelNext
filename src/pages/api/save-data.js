import fs from 'fs';
import path from 'path';

// Function to generate a 10-digit alphanumeric eventID
const generateEventID = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 10; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const newEvent = req.body;
    const filePath = path.join(process.cwd(), 'src', 'data', 'data.json'); // Path to data.json

    try {
      // Read the existing file content
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const jsonData = JSON.parse(fileContent);

      // Ensure 'events' object exists
      if (!jsonData.events) {
        jsonData.events = [];
      }

      // Add eventID and append the new event to 'events'
      const updatedEvent = { ...newEvent, eventID: generateEventID() };
      jsonData.events.push(updatedEvent);

      // Write the updated content back to the file
      fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

      res.status(200).json({ message: 'Event added successfully!', eventID: updatedEvent.eventID });
    } catch (error) {
      console.error('Error appending data:', error);
      res.status(500).json({ error: 'Failed to append data to the file.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
