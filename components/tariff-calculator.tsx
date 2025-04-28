"use client"

import type React from "react"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { tariffData } from "./tariff-data-service"

// Dynamically import Plotly with SSR disabled
const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
  loading: () => <div className="h-[450px] w-full flex items-center justify-center">Loading visualization...</div>,
})

const TariffMap: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const customColorscale = [
    [0, "#90A959"], // Green (low)
    [0.5, "#F4BF75"], // Yellow (medium)
    [1, "#D95B43"], // Red (high)
  ]

  if (!isMounted) {
    return <div className="h-[450px] w-full flex items-center justify-center">Loading visualization...</div>
  }

  return (
    <div className="w-full overflow-hidden bg-[#f9f4ef] p-4">
      <h2 className="text-center text-lg font-bold mb-4 text-gray-800">Tariff Difference After April 10, 2025</h2>
      <div className="w-full overflow-hidden" style={{ maxHeight: isMobile ? "550px" : "500px" }}>
        <Plot
          data={[
            {
              type: "choropleth",
              locations: tariffData.map((d) => d.cty_iso),
              z: tariffData.map((d) => d.difference),
              zmin: 0,
              zmax: 0.3,
              text: tariffData.map(
                (d) =>
                  `${d.countryName}<br>Before: ${d.tariffBeforeTrump.toFixed(4)}<br>After: ${d.tariffAfterTrump.toFixed(4)}<br>Diff: ${d.difference.toFixed(4)}`,
              ),
              hoverinfo: "text",
              colorscale: customColorscale,
              colorbar: {
                title: "Tariff Diff",
                thickness: isMobile ? 15 : 10, // Thicker on mobile
                len: isMobile ? 0.6 : 0.5, // Longer on mobile
                y: 0.5, // Center vertically
                yanchor: "middle",
                titleside: "right",
                outlinewidth: 0,
                tickformat: ".1f",
                titlefont: { size: isMobile ? 14 : 12 }, // Larger font on mobile
                tickfont: { size: isMobile ? 12 : 10 }, // Larger font on mobile
              },
              marker: {
                line: {
                  color: "#fff",
                  width: 0.5,
                },
              },
            },
          ]}
          layout={{
            geo: {
              showframe: false,
              showcoastlines: true,
              projection: {
                type: "equirectangular",
                scale: isMobile ? 1.3 : 1.1, // Larger scale on mobile
              },
              domain: {
                x: isMobile ? [0, 0.82] : [0, 0.85], // Adjust for mobile
                y: [0, 1],
              },
              center: {
                lon: 0,
                lat: 20,
              },
            },
            autosize: true,
            height: isMobile ? 480 : 400, // Taller on mobile
            width: null, // Let it be responsive
            paper_bgcolor: "#f9f4ef",
            plot_bgcolor: "#f9f4ef",
            margin: { l: 0, r: 0, t: 10, b: 0 },
            responsive: true,
          }}
          style={{ width: "100%", height: "100%" }}
          config={{
            displayModeBar: false,
            responsive: true,
          }}
          useResizeHandler={true}
        />
      </div>
    </div>
  )
}

export default TariffMap
