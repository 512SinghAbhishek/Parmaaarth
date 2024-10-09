import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set content type to text/plain
  res.setHeader('Content-Type', 'text/plain');

  // Define the robots.txt content
  const robotsTxt = `
    User-agent: *
    Allow: *
    
    Sitemap: https://parmaarth.in//sitemap.xml`;

  // Send the response
  res.status(200).send(robotsTxt);
}
