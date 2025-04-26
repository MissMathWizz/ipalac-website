// This file handles loading and processing tariff data
// In a production environment, you would connect this to a database or API

type TariffData = {
  [key: string]: number // Format: "originCountry-destinationCountry-productCategory": tariffRate
}

// Sample data - in a real implementation, this would be loaded from your Excel file
// Format of the key: "originCountry-destinationCountry-productCategory"
const tariffRates: TariffData = {
  "CN-MX-AG": 15.2,
  "CN-MX-AU": 20.0,
  "CN-MX-CH": 8.5,
  "CN-MX-EL": 5.2,
  "CN-MX-MA": 10.3,
  "CN-MX-TE": 25.0,

  "JP-MX-AG": 12.8,
  "JP-MX-AU": 18.5,
  "JP-MX-CH": 7.2,
  "JP-MX-EL": 3.8,
  "JP-MX-MA": 8.5,
  "JP-MX-TE": 22.0,

  "KR-MX-AG": 13.5,
  "KR-MX-AU": 19.0,
  "KR-MX-CH": 7.8,
  "KR-MX-EL": 4.2,
  "KR-MX-MA": 9.0,
  "KR-MX-TE": 23.5,

  // Add more combinations as needed

  // Default fallback rate
  default: 10.0,
}

/**
 * Get the tariff rate for a specific combination of origin, destination, and product category
 */
export function getTariffRate(originCountry: string, destinationCountry: string, productCategory: string): number {
  const key = `${originCountry}-${destinationCountry}-${productCategory}`
  return tariffRates[key] || tariffRates.default
}

/**
 * Instructions for importing Excel data:
 *
 * 1. Convert your "Tariff as of April 10.xlsx" file to a JSON format using a tool like:
 *    - Excel's "Save As" feature to CSV, then convert to JSON
 *    - A Node.js script using libraries like 'xlsx' to read the Excel file
 *    - Online converters
 *
 * 2. Structure the JSON data in the format shown above
 *
 * 3. Replace the sample tariffRates object with your actual data
 *
 * 4. For a production environment, consider:
 *    - Storing the data in a database (MongoDB, PostgreSQL, etc.)
 *    - Creating an API endpoint to fetch the data
 *    - Using a CDN to serve the JSON file
 */

/**
 * Example of how to load data from an external source:
 */
/*
export async function loadTariffData(): Promise<TariffData> {
  try {
    // Option 1: Load from a JSON file
    const response = await fetch('/data/tariffs.json');
    const data = await response.json();
    return data;
    
    // Option 2: Load from an API
    // const response = await fetch('https://api.example.com/tariffs');
    // const data = await response.json();
    // return data;
  } catch (error) {
    console.error('Error loading tariff data:', error);
    return tariffRates; // Fallback to sample data
  }
}
*/
