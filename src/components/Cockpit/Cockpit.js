import React, { useEffect } from 'react'
import './Cockpit.css'

const Cockpit = (props) => {
  const { personsNumber, showPersons, toggleVisibility, resetState } = props

  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // HTTP req...
    // const timer = setTimeout(() => {
    //   alert('Saved data of Cockpit.js to cloud!')
    // }, 2000)
    return () => {
      // clearTimeout(timer)
      console.log('[Cockpit.js] cleanup work in useEffect!')
    }
  })

  const toggleClasses = ['basic-button']
  showPersons ? toggleClasses.push('basic-color') : toggleClasses.push('hiding-color')

  const pClasses = []
  personsNumber <= 2 && pClasses.push('red')
  personsNumber <= 1 && pClasses.push('bold')

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={pClasses.join(' ')}>I hope this course will help me @@</p>
      <button className={toggleClasses.join(' ')} onClick={toggleVisibility}>Toggle People's Visibility!</button>
      <button className='basic-button basic-color' onClick={resetState}>Reset People</button>
    </div>
  )
}

export default React.memo(Cockpit)