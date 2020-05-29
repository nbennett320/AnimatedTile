import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import sizeOf from 'image-size'

export default class AnimatedTile extends Component {
  constructor (props) {
    super(props)
    this.dimensions = sizeOf(require(props.image))
  }

  keyframes = () => {
    const { frames } = this.props
    return keyframes`
      100% { background-position: ${width / frames} }
    `
  }

  animation = () => {
    const { duration, frames } = this.props
    return styled`animation: ${`${this.animation} ${duration}s steps(${frames}) infinite`};`
  }

  render() {
    const { 
      image, 
      duration,
      frames,
      styles
    } = this.props
    if(!image || !isString(image)) throw "Image is undefined or is not a path"
    if(!duration || isNaN(duration)) throw "Duration is undefined or not a number"
    if(!frames || isNan(frames)) throw "Frames is undefined or not a number"
    return (
      <div style={{
        ...styles ? styles : {},
        ...componentStyles.main,
        width: `${this.dimensions.width / frames}px`,
        height: `${this.dimensions.height}px`,
        backgroundImage: `url(${require(image)})`,
        ...this.animation
      }}></div>
    )
  }
}

const componentStyles = {
  main: {
    overflow: 'hidden',
  }
}