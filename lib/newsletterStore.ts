import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), '.next', 'newsletter_subscribers.json');

// In-memory set for runtime speed and serverless compatibility
const subscribersSet = new Set<string>([
  'demo@techvision.io',
]);

function loadFromDisk() {
  try {
    if (fs.existsSync(DB_PATH)) {
      const data = fs.readFileSync(DB_PATH, 'utf-8');
      const list = JSON.parse(data);
      if (Array.isArray(list)) {
        list.forEach((email: string) => subscribersSet.add(email.toLowerCase().trim()));
      }
    }
  } catch (err) {
    console.error('Error reading newsletter store:', err);
  }
}

// Initial load
loadFromDisk();

export function getSubscribers(): Set<string> {
  return subscribersSet;
}

export function addSubscriber(email: string): { success: boolean; alreadySubscribed?: boolean } {
  const normalized = email.toLowerCase().trim();

  if (subscribersSet.has(normalized)) {
    return { success: false, alreadySubscribed: true };
  }

  subscribersSet.add(normalized);

  try {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_PATH, JSON.stringify(Array.from(subscribersSet), null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving newsletter store to disk:', err);
  }

  return { success: true };
}
