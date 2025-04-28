"use client"

import type React from "react"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { tariffData } from "./tariff-data-service"

// Dynamically import Plotly with SSR disabled
const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full flex items-center justify-center">Cargando visualización...</div>,
})

const TariffMapES: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const customColorscale = [
    [0, "#90A959"], // Verde (bajo)
    [0.5, "#F4BF75"], // Amarillo (medio)
    [1, "#D95B43"], // Rojo (alto)
  ]

  if (!isMounted) {
    return <div className="h-[400px] w-full flex items-center justify-center">Cargando visualización...</div>
  }

  return (
    <div className="w-full overflow-hidden bg-[#f9f4ef] p-2 sm:p-4">
      <h2 className="text-center text-lg font-bold mb-2 sm:mb-4 text-gray-800">
        Diferencia Arancelaria Después del 10 de Abril de 2025
      </h2>
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
                  `${d.countryName}<br>Antes: ${d.tariffBeforeTrump.toFixed(4)}<br>Después: ${d.tariffAfterTrump.toFixed(4)}<br>Dif: ${d.difference.toFixed(4)}`,
              ),
              hoverinfo: "text",
              colorscale: customColorscale,
              colorbar: {
                title: "Dif. Arancelaria",
                thickness: 8, // Further reduced for mobile
                len: 0.4, // Shorter colorbar
                y: 0.5, // Center vertically
                yanchor: "middle",
                titleside: "right",
                outlinewidth: 0,
                tickformat: ".1f",
                titlefont: { size: 10 }, // Smaller title font
                tickfont: { size: 9 }, // Smaller tick font
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
                scale: 1.2, // Increased scale for mobile
              },
              domain: {
                x: [0, 0.82], // Adjusted to give more space to the map
                y: [0, 1],
              },
            },
            autosize: true,
            height: 350, // Reduced height on mobile
            paper_bgcolor: "#f9f4ef",
            plot_bgcolor: "#f9f4ef",
            margin: { l: 0, r: 0, t: 0, b: 0 }, // Removed top margin
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

export default TariffMapES
