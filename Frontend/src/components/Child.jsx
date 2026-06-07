import React from 'react'

const Child = ({ name, age, marks }) => {
  return (
    <>
      <div>{name}</div>
      <div>{age}</div>
      {marks.map((val, i) => (
        <p key={i}>{`${i + 1} : ${val}`}</p>
      ))}
    </>
  )
}
<div>
  <h1>Sathya</h1>
  <p>Name</p>
</div>

export default Child