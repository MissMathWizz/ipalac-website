'use client'

import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { tariffData } from "./tariff-data-service"

// Dynamically import Plotly with SSR disabled
const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
  loading: () => <div className="h-[600px] w-full flex items-center justify-center">Loading visualization...</div>
})

const TariffMap: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const customColorscale = [
    [0, '#90A959'],   // Green (low)
    [0.5, '#F4BF75'], // Yellow (medium)
    [1, '#D95B43'],   // Red (high)
  ]

  if (!isMounted) {
    return <div className="h-[600px] w-full flex items-center justify-center">Loading visualization...</div>
  }

  return (
    <div style={{ backgroundColor: '#f9f4ef', padding: '1rem' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>
        Tariff Difference After April 10, 2025
      </h2>
      <Plot
        data={[
          {
            type: "choropleth",
            locations: tariffData.map((d) => d.cty_iso),
            z: tariffData.map((d) => d.difference),
            zmin: 0,
            zmax: 0.3, // Adjust for better visual balance
            text: tariffData.map(
              (d) =>
                `${d.countryName}<br>Before: ${d.tariffBeforeTrump.toFixed(4)}<br>After: ${d.tariffAfterTrump.toFixed(4)}<br>Diff: ${d.difference.toFixed(4)}`
            ),
            hoverinfo: 'text',
            colorscale: customColorscale,
            colorbar: { title: "Tariff Diff" },
            marker: {
              line: {
                color: '#fff',
                width: 0.5,
              },
            },
          },
        ]}
        layout={{
          geo: { showframe: false, showcoastlines: true },
          width: 900,
          height: 600,
          paper_bgcolor: '#f9f4ef',
          plot_bgcolor: '#f9f4ef',
          margin: { l: 0, r: 0, t: 30, b: 0 },
          autosize: true,
          responsive: true,
        }}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />
    </div>
  )
}

export default TariffMap
