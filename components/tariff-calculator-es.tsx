"use client"

import type React from "react"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { tariffData } from "./tariff-data-service"

// Dynamically import Plotly with SSR disabled
const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
  loading: () => <div className="h-[450px] w-full flex items-center justify-center">Cargando visualización...</div>,
})

const TariffMapES: React.FC = () => {
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
    [0, "#90A959"], // Verde (bajo)
    [0.5, "#F4BF75"], // Amarillo (medio)
    [1, "#D95B43"], // Rojo (alto)
  ]

  if (!isMounted) {
    return <div className="h-[450px] w-full flex items-center justify-center">Cargando visualización...</div>
  }

  return (
    <div className="w-full overflow-hidden bg-[#f9f4ef] p-2">
      <h2 className="text-center text-lg font-bold mb-2 text-gray-800">
        Diferencia Arancelaria Después del 10 de Abril de 2025
      </h2>
      <div className="w-full overflow-hidden" style={{ maxHeight: isMobile ? "600px" : "500px" }}>
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
                thickness: isMobile ? 20 : 10, // Much thicker on mobile
                len: isMobile ? 0.7 : 0.5, // Longer on mobile
                y: 0.5, // Center vertically
                yanchor: "middle",
                titleside: "right",
                outlinewidth: 0,
                tickformat: ".1f",
                titlefont: { size: isMobile ? 16 : 12 }, // Larger font on mobile
                tickfont: { size: isMobile ? 14 : 10 }, // Larger font on mobile
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
                scale: isMobile ? 1.0 : 1.1, // Smaller scale on mobile to fit more of the map
              },
              domain: {
                x: isMobile ? [0, 0.75] : [0, 0.85], // Give more space to the legend on mobile
                y: [0, 1],
              },
              center: {
                lon: 0,
                lat: 20,
              },
            },
            autosize: true,
            height: isMobile ? 550 : 400, // Much taller on mobile
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

export default TariffMapES
