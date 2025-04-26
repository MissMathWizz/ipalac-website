"use client"

import { useEffect, useRef, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data - in a real implementation, this would come from an API
const sampleTradeData = {
  "CN-MX": { exports: 76.2, imports: 12.8, balance: -63.4, growth: 8.2 },
  "CN-BR": { exports: 84.5, imports: 102.3, balance: 17.8, growth: 12.5 },
  "CN-CL": { exports: 41.2, imports: 38.7, balance: -2.5, growth: 5.3 },
  "JP-MX": { exports: 18.3, imports: 5.7, balance: -12.6, growth: 3.1 },
  "JP-BR": { exports: 7.9, imports: 11.2, balance: 3.3, growth: -1.2 },
  "KR-MX": { exports: 14.5, imports: 4.2, balance: -10.3, growth: 7.8 },
  "KR-BR": { exports: 8.7, imports: 6.3, balance: -2.4, growth: 4.5 },
}

const asianCountries = [
  { code: "CN", name: "China" },
  { code: "JP", name: "Japan" },
  { code: "KR", name: "South Korea" },
]

const latinAmericanCountries = [
  { code: "MX", name: "Mexico" },
  { code: "BR", name: "Brazil" },
  { code: "CL", name: "Chile" },
  { code: "CO", name: "Colombia" },
  { code: "AR", name: "Argentina" },
  { code: "PE", name: "Peru" },
]

export default function TradeVisualization() {
  const [asianCountry, setAsianCountry] = useState("CN")
  const [latamCountry, setLatamCountry] = useState("MX")
  const [activeTab, setActiveTab] = useState("overview")
  const [tradeData, setTradeData] = useState<any>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // In a real implementation, this would fetch data from an API
    const key = `${asianCountry}-${latamCountry}`
    const data = sampleTradeData[key as keyof typeof sampleTradeData]

    if (data) {
      setTradeData(data)
      if (activeTab === "visualization" && canvasRef.current) {
        drawTradeFlowVisualization(canvasRef.current, data, asianCountry, latamCountry)
      }
    } else {
      // If no data exists for this country pair, use default values
      setTradeData({
        exports: 0,
        imports: 0,
        balance: 0,
        growth: 0,
      })
    }
  }, [asianCountry, latamCountry, activeTab])

  useEffect(() => {
    // Redraw visualization when tab changes to visualization
    if (activeTab === "visualization" && canvasRef.current && tradeData) {
      drawTradeFlowVisualization(canvasRef.current, tradeData, asianCountry, latamCountry)
    }
  }, [activeTab, tradeData, asianCountry, latamCountry])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (activeTab === "visualization" && canvasRef.current && tradeData) {
        drawTradeFlowVisualization(canvasRef.current, tradeData, asianCountry, latamCountry)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [activeTab, tradeData, asianCountry, latamCountry])

  const drawTradeFlowVisualization = (
    canvas: HTMLCanvasElement,
    data: { exports: number; imports: number; balance: number; growth: number },
    asianCode: string,
    latamCode: string,
  ) => {
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match its display size
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Define colors
    const exportColor = "#6AAA38" // green
    const importColor = "#E63A34" // red
    const neutralColor = "#F7B917" // yellow

    // Get country names
    const asianName = asianCountries.find((c) => c.code === asianCode)?.name || asianCode
    const latamName = latinAmericanCountries.find((c) => c.code === latamCode)?.name || latamCode

    // Draw background
    ctx.fillStyle = "#f8f8f8"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw countries
    const countryRadius = Math.min(canvas.width, canvas.height) * 0.15
    const padding = countryRadius * 1.2

    // Asian country (left)
    ctx.beginPath()
    ctx.arc(padding, canvas.height / 2, countryRadius, 0, Math.PI * 2)
    ctx.fillStyle = "#f0f0f0"
    ctx.fill()
    ctx.strokeStyle = "#000"
    ctx.lineWidth = 2
    ctx.stroke()

    // Latin American country (right)
    ctx.beginPath()
    ctx.arc(canvas.width - padding, canvas.height / 2, countryRadius, 0, Math.PI * 2)
    ctx.fillStyle = "#f0f0f0"
    ctx.fill()
    ctx.strokeStyle = "#000"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw country names
    ctx.font = "bold 16px Arial"
    ctx.textAlign = "center"
    ctx.fillStyle = "#000"
    ctx.fillText(asianName, padding, canvas.height / 2 + countryRadius + 25)
    ctx.fillText(latamName, canvas.width - padding, canvas.height / 2 + countryRadius + 25)

    // Calculate arrow widths based on trade volume
    const maxWidth = countryRadius * 0.8
    const exportWidth = Math.max(2, (data.exports / 100) * maxWidth)
    const importWidth = Math.max(2, (data.imports / 100) * maxWidth)

    // Draw export flow (Asian to Latin American)
    const exportY = canvas.height / 2 - 20
    drawArrow(
      ctx,
      padding + countryRadius,
      exportY,
      canvas.width - padding - countryRadius,
      exportY,
      exportWidth,
      exportColor,
    )

    // Draw import flow (Latin American to Asian)
    const importY = canvas.height / 2 + 20
    drawArrow(
      ctx,
      canvas.width - padding - countryRadius,
      importY,
      padding + countryRadius,
      importY,
      importWidth,
      importColor,
    )

    // Add trade volume labels
    ctx.font = "14px Arial"
    ctx.fillStyle = "#000"
    ctx.textAlign = "center"
    ctx.fillText(`$${data.exports.toFixed(1)}B`, canvas.width / 2, exportY - exportWidth - 5)
    ctx.fillText(`$${data.imports.toFixed(1)}B`, canvas.width / 2, importY + importWidth + 15)

    // Add legend
    const legendY = canvas.height - 40
    ctx.font = "12px Arial"
    ctx.textAlign = "left"

    // Export legend
    ctx.fillStyle = exportColor
    ctx.fillRect(20, legendY, 20, 10)
    ctx.fillStyle = "#000"
    ctx.fillText("Exports", 45, legendY + 9)

    // Import legend
    ctx.fillStyle = importColor
    ctx.fillRect(120, legendY, 20, 10)
    ctx.fillStyle = "#000"
    ctx.fillText("Imports", 145, legendY + 9)

    // Trade balance
    ctx.textAlign = "right"
    ctx.fillStyle = "#000"
    ctx.font = "bold 14px Arial"
    ctx.fillText(
      `Trade Balance: ${data.balance >= 0 ? "+" : ""}$${data.balance.toFixed(1)}B`,
      canvas.width - 20,
      legendY + 9,
    )
  }

  const drawArrow = (
    ctx: CanvasRenderingContext2D,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    lineWidth: number,
    color: string,
  ) => {
    const headLength = 15
    const headWidth = lineWidth * 1.5

    // Calculate the angle of the line
    const angle = Math.atan2(toY - fromY, toX - fromX)

    // Starting point
    ctx.beginPath()
    ctx.moveTo(fromX, fromY - lineWidth / 2)

    // Line to arrow head base
    ctx.lineTo(toX - headLength * Math.cos(angle), toY - headLength * Math.sin(angle) - lineWidth / 2)

    // Arrow head
    ctx.lineTo(toX - headLength * Math.cos(angle), toY - headLength * Math.sin(angle) - headWidth / 2)
    ctx.lineTo(toX, toY)
    ctx.lineTo(toX - headLength * Math.cos(angle), toY - headLength * Math.sin(angle) + headWidth / 2)
    ctx.lineTo(toX - headLength * Math.cos(angle), toY - headLength * Math.sin(angle) + lineWidth / 2)

    // Back to start
    ctx.lineTo(fromX, fromY + lineWidth / 2)
    ctx.closePath()

    // Fill arrow
    ctx.fillStyle = color
    ctx.fill()
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Asian Country</label>
          <Select value={asianCountry} onValueChange={setAsianCountry}>
            <SelectTrigger>
              <SelectValue placeholder="Select Asian country" />
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
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Latin American Country</label>
          <Select value={latamCountry} onValueChange={setLatamCountry}>
            <SelectTrigger>
              <SelectValue placeholder="Select Latin American country" />
            </SelectTrigger>
            <SelectContent>
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
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview">Trade Overview</TabsTrigger>
          <TabsTrigger value="visualization">Visualization</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="p-4 border rounded-md">
          {tradeData ? (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 border rounded-md bg-green-50">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">Exports</div>
                  <div className="text-2xl font-bold text-green-600">${tradeData.exports.toFixed(1)}B</div>
                  <div className="text-sm text-neutral-600">
                    From {asianCountries.find((c) => c.code === asianCountry)?.name} to{" "}
                    {latinAmericanCountries.find((c) => c.code === latamCountry)?.name}
                  </div>
                </div>
                <div className="p-4 border rounded-md bg-red-50">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">Imports</div>
                  <div className="text-2xl font-bold text-red-600">${tradeData.imports.toFixed(1)}B</div>
                  <div className="text-sm text-neutral-600">
                    From {latinAmericanCountries.find((c) => c.code === latamCountry)?.name} to{" "}
                    {asianCountries.find((c) => c.code === asianCountry)?.name}
                  </div>
                </div>
                <div className="p-4 border rounded-md bg-neutral-50">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">Balance</div>
                  <div className={`text-2xl font-bold ${tradeData.balance >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {tradeData.balance >= 0 ? "+" : ""}
                    {tradeData.balance.toFixed(1)}B
                  </div>
                  <div className="text-sm text-neutral-600">Net trade balance</div>
                </div>
                <div className="p-4 border rounded-md bg-yellow-50">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">Growth</div>
                  <div className={`text-2xl font-bold ${tradeData.growth >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {tradeData.growth >= 0 ? "+" : ""}
                    {tradeData.growth.toFixed(1)}%
                  </div>
                  <div className="text-sm text-neutral-600">Year-over-year</div>
                </div>
              </div>

              <div className="p-4 border rounded-md bg-neutral-50">
                <h3 className="text-lg font-bold mb-2">Trade Analysis</h3>
                <p className="text-sm text-neutral-700">
                  {tradeData.balance < -10
                    ? `${asianCountries.find((c) => c.code === asianCountry)?.name} has a significant trade surplus with ${latinAmericanCountries.find((c) => c.code === latamCountry)?.name}, exporting substantially more goods than it imports. This imbalance may present opportunities for increased exports from ${latinAmericanCountries.find((c) => c.code === latamCountry)?.name} or for policy discussions on trade equity.`
                    : tradeData.balance > 10
                      ? `${latinAmericanCountries.find((c) => c.code === latamCountry)?.name} enjoys a favorable trade balance with ${asianCountries.find((c) => c.code === asianCountry)?.name}, with exports exceeding imports by $${Math.abs(tradeData.balance).toFixed(1)}B. This positive balance contributes to economic growth and employment in ${latinAmericanCountries.find((c) => c.code === latamCountry)?.name}.`
                      : `The trade relationship between ${asianCountries.find((c) => c.code === asianCountry)?.name} and ${latinAmericanCountries.find((c) => c.code === latamCountry)?.name} is relatively balanced, with a trade differential of $${Math.abs(tradeData.balance).toFixed(1)}B. This balanced relationship provides a solid foundation for further economic cooperation.`}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p>No trade data available for the selected countries.</p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="visualization" className="border rounded-md p-4">
          <canvas ref={canvasRef} className="w-full h-[400px]"></canvas>
        </TabsContent>
      </Tabs>

      <div className="text-xs text-neutral-500 mt-4">
        <p>
          Note: This visualization shows estimated trade flows based on recent data. Values are in billions of USD. For
          more detailed analysis and specific product categories, please contact our research team.
        </p>
      </div>
    </div>
  )
}
