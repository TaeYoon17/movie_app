import React from 'react';
import Proptypes from 'prop-types'

function Food({name,url}){
  return (
    <>
      <h2>I like {name} !!</h2>
      <a href={url}>Here is Location</a>
    </>
  )
}

const FoodList = [
  {
    id:1,
    name:"Hamburger",
    URL: "www.naver.com",
    rating: 5
  },
  {
    id:2,
    name:"Sandwich",
    URL: "www.naver.com",
    rating: 4.9
  },
  {
    id:3,
    name:"Pizza",
    URL: "www.naver.com",
    rating: 3
  },
  {
    id:4,
    name:"Curry",
    URL: "www.naver.com",
    rating: 2.1
  }
]

function renderFood(dish){
  console.log(dish)
  return <Food key={dish.id} name={dish.name} url={dish.URL}/>
}

function App() {
  return (
    <div>
      {FoodList.map(renderFood)}
    </div>
  );
}

export default App;
