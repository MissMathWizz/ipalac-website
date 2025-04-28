"use client"

import type React from "react"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { tariffData } from "./tariff-data-service"

// Dynamically import Plotly with SSR disabled
const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full flex items-center justify-center">Loading visualization...</div>,
})

const TariffMap: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const customColorscale = [
    [0, "#90A959"], // Green (low)
    [0.5, "#F4BF75"], // Yellow (medium)
    [1, "#D95B43"], // Red (high)
  ]

  if (!isMounted) {
    return <div className="h-[400px] w-full flex items-center justify-center">Loading visualization...</div>
  }

  return (
    <div className="w-full overflow-hidden bg-[#f9f4ef] p-4">
      <h2 className="text-center text-lg font-bold mb-4 text-gray-800">Tariff Difference After April 10, 2025</h2>
      <div className="w-full overflow-hidden">
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
                thickness: 10, // Reduced from 15
                len: 0.5, // Set to 50% of the height
                y: 0.5, // Center vertically
                yanchor: "middle",
                titleside: "right",
                outlinewidth: 0,
                tickformat: ".1f",
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
                scale: 1.1, // Slightly increased scale to make map more prominent
              },
              domain: {
                x: [0, 0.85], // Give more space to the map
                y: [0, 1],
              },
            },
            autosize: true,
            height: 400,
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
