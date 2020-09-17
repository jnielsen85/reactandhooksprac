import React from 'react' //dont need componet as not using a class that extend component instead creating a funciton

const person = (props) => {
  return (
    <div>
      <p> I'm {props.name} and I am {props.age} year old! </p>
      <p>{props.children}</p>
    </div>
  )
};

  //take the attributes and gives us access in receieving components via props.  One object that has all tghe properties of this cpmponent and properties means all the attributes you add on your cpmponent e.g. name, age

export default person;
