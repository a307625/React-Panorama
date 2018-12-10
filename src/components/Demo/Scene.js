import React, { Component } from 'react'

const Scene = ({
  panorama
}) => {
  return (
    <div>
      <a-scene>
        <a-assets>
          <img id={panorama.index.toString()} crossOrigin="anonymous" src={ panorama.desktopUrl } />
        </a-assets>
        <a-sky material="opacity: 0" id="image-360" rotation={panorama.rotation} position={panorama.position} src={ "#" + panorama.index }>
          <a-animation attribute="material.opacity" dur="5000" repeat="0" to="1"></a-animation>
        </a-sky>
      </a-scene>
    </div>
  )
}

export default Scene
