import React from 'react';
import PropTypes from 'prop-types';

const foodILike=[
  {
    id:1,
    name : "Kimchi",
    image:
    "https://woochonfood.com/wp-content/uploads/2019/05/%EB%B0%B0%EC%B6%94%EA%B9%80%EC%B9%98-Napa-Cabbage-Kimchi.jpg"
    ,rating:5
  },
  {
    id:2,
    name : "Samgiosal",
    image:
    "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG"
    ,rating:4.9
  },
  {
    id:3,
    name : "Bibimbap",
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboHxQ-wdDFBECc2FfNH_H46vxp9YKkpyb9CfJ5kKqJeaUgDur&s"
    ,rating:4.5
  },
  {
    id:4,
    name : "Doncasu",
    image:
    "http://mbcmall.imbc.com/store/__icsFiles/afieldfile/2018/12/27/001_1.jpg"
    ,rating:2
  },
  {
    id:5,
    name : "Kimbap",
    image:
    "http://recipe1.ezmember.co.kr/cache/recipe/2018/01/18/91237b8fa18b78700d6586e1c6c9f73b1.jpg"
    ,rating:3
  }
];

// function renderFood(dish){
//   console.log(dish);
//   return <Food name={dish.name} picture={dish.picture} alt={dish.name}/>
// }

function Food({name,picture,rating}){ 
  return <div> 
  <h1> I like {name} </h1>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name}/>
  </div>
}

Food.propTypes={ //에러를 더 쉽게 알려줌 
name : PropTypes.string.isRequired
,picture : PropTypes.string.isRequired
,rating : PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {/* <Food fav="kimchi"/> 
      <Food fav="ramen"/> 
      <Food fav="samgiosal"/> 
      <Food fav="chukumi"/>  */}
      {/* 정적인 방법 --- <component  property = value */}
      {/* Map은 array의 각 아이템에서 function을 
          실행하는 array를 가지는 javascript function이며
          그 function의 결과값을 갖는 array를 나에게 줌
      */}
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}

      {/* {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}  */}
    </div>
  );
}

export default App;
