import ReactDOM from 'react-dom'
import React from 'react'
import AnimatedTile from '../src/AnimatedTile'

const Container = () => {
  return (
    <div style={styles.main}>
      <AnimatedTile 
        image={'./img/demos-image.png'}
        duration={0.8}
        frames={3}
      />
    </div>
  )
}

const styles = {
  main: {
    backgroundColor: '#fff'
  }
}

ReactDOM.render(<Container />, document.getElementById("root"))