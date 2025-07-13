import React from 'react'

const ProfileCard = ( {name, age, hobby} ) => {
  return (
    <div>ProfileCard
    <h2>{name}</h2>
    <p>年齢：{age}歳</p>
    <p>趣味：{hobby}</p>
    </div>
  )
}

export default ProfileCard