import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
 
} from "react-simple-maps";

import features from '../assets/json/features.json'
const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [80.0, -50.0, 0],
        center: [-5, -3],
        scale: 600
      }}
      style={{width:"100%",
        height:"100%"
      }}
    >
      <Geographies
        geography={features}
        fill="#10106c"
        stroke="#9b3dff"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-73.5616, 45.5088]}
        dx={90}
        dy={30}
        connectorProps={{
          stroke: "#ffffff",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="70" textAnchor="end" alignmentBaseline="middle" fill="#FFF">
          {"Montréal"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
