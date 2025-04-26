"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getTariffRate } from "./tariff-data-service"

const asianCountries = [
  { code: "CN", name: "China" },
  { code: "JP", name: "Japan" },
  { code: "KR", name: "South Korea" },
  { code: "SG", name: "Singapore" },
  { code: "TH", name: "Thailand" },
  { code: "VN", name: "Vietnam" },
]

const latinAmericanCountries = [
  { code: "AR", name: "Argentina" },
  { code: "BR", name: "Brazil" },
  { code: "CL", name: "Chile" },
  { code: "CO", name: "Colombia" },
  { code: "MX", name: "Mexico" },
  { code: "PE", name: "Peru" },
]

const productCategories = [
  { code: "AG", name: "Agricultural Products" },
  { code: "AU", name: "Automotive" },
  { code: "CH", name: "Chemicals" },
  { code: "EL", name: "Electronics" },
  { code: "MA", name: "Machinery" },
  { code: "TE", name: "Textiles" },
]

export default function TariffCalculator() {
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [category, setCategory] = useState("")
  const [value, setValue] = useState("")
  const [result, setResult] = useState<null | {
    rate: number
    tariff: number
    total: number
  }>(null)

  const calculateTariff = () => {
    // Get tariff rate from our data service
    const rate = getTariffRate(origin, destination, category)

    // Calculate tariff amount
    const productValue = Number.parseFloat(value) || 0
    const tariffAmount = (productValue * rate) / 100
    const totalCost = productValue + tariffAmount

    setResult({
      rate,
      tariff: tariffAmount,
      total: totalCost,
    })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="origin">Origin Country</Label>
          <Select value={origin} onValueChange={setOrigin}>
            <SelectTrigger id="origin">
              <SelectValue placeholder="Select origin country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="_header_asian" disabled className="font-bold">
                Asian Countries
              </SelectItem>
              {asianCountries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.name}
                </SelectItem>
              ))}
              <SelectItem value="_header_latam" disabled className="font-bold">
                Latin American Countries
              </SelectItem>
              {latinAmericanCountries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="destination">Destination Country</Label>
          <Select value={destination} onValueChange={setDestination}>
            <SelectTrigger id="destination">
              <SelectValue placeholder="Select destination country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="_header_asian" disabled className="font-bold">
                Asian Countries
              </SelectItem>
              {asianCountries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.name}
                </SelectItem>
              ))}
              <SelectItem value="_header_latam" disabled className="font-bold">
                Latin American Countries
              </SelectItem>
              {latinAmericanCountries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Product Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select product category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="_header_category" disabled className="font-bold">
                Product Categories
              </SelectItem>
              {productCategories.map((category) => (
                <SelectItem key={category.code} value={category.code}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="value">Product Value (USD)</Label>
          <Input
            id="value"
            type="number"
            placeholder="Enter product value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>

      <Button
        onClick={calculateTariff}
        className="w-full bg-black text-white hover:bg-red-600 rounded-none font-mono uppercase tracking-wide"
        disabled={!origin || !destination || !category || !value}
      >
        Calculate Tariff
      </Button>

      {result && (
        <div className="mt-6 p-6 border bg-neutral-50">
          <h4 className="text-lg font-bold mb-4">Tariff Calculation Results</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-mono text-sm">Effective Tariff Rate:</span>
              <span className="font-bold">{result.rate.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="font-mono text-sm">Product Value:</span>
              <span>${Number.parseFloat(value).toFixed(2)} USD</span>
            </div>
            <div className="flex justify-between">
              <span className="font-mono text-sm">Tariff Amount:</span>
              <span>${result.tariff.toFixed(2)} USD</span>
            </div>
            <div className="flex justify-between border-t pt-2 mt-2">
              <span className="font-mono text-sm font-bold">Total Cost:</span>
              <span className="font-bold">${result.total.toFixed(2)} USD</span>
            </div>
          </div>
        </div>
      )}

      <div className="text-xs text-neutral-500 mt-4">
        <p>
          Note: This calculator provides estimated tariff rates for informational purposes only. Actual rates may vary
          based on specific trade agreements, product classifications, and other factors. Please consult with a trade
          specialist for accurate information.
        </p>
      </div>
    </div>
  )
}
