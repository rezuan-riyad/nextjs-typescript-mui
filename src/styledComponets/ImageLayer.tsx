import React from 'react'

type PropType = {
  url: string,
  width?: number,
  height: number,
  children?: React.ReactNode
}

export default function ImageLayer({ url, width, height, children }: PropType) {
  return (
    <div style={{
      height: `${height}px`,
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${url})`,
      backgroundSize: "cover",
      color: "white"
    }}>
      {children}
    </div>
  )
}