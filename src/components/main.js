import React from "react";
import DC from "./dynamicComponent.js";
import HigherOrderComponent from "./hoc";
import ShowEmployeeBasicDetails from "./testComponent";

//An example component
function MyApp() {
  const fname = "Dipanjan";
  const lname = "Mazumder";
  const date = new Date();
  const hrs = date.getHours();
  //Inline CSS styles
  const styles = {
    //color: "#FF8C00"
    //backgroundColor: "#FF2"
  };

  let timeOfDay;
  if (hrs < 12) {
    timeOfDay = "Morning";
    styles.color = "red";
  } else if (hrs >= 12 && hrs <= 17) {
    timeOfDay = "Afternoon";
    styles.color = "green";
  } else if (hrs > 17 && hrs <= 20) {
    timeOfDay = "Evening";
    styles.color = "blue";
  } else {
    timeOfDay = "Night";
    styles.color = "black";
  }
  var HOCDetails = HigherOrderComponent(ShowEmployeeBasicDetails);
  return (
    <main>
      <div>
        <h1 style={styles}>
          {" "}
          {/* Javascript with JSX we need to use open curly braces to start js code
           and close curly brace to go out of js code */}
          Good {timeOfDay + " " + fname + " " + lname}{" "}
        </h1>
        <DC
          //Basic properties
          contact={{
            name: "Dipanjan",
            age: "38",
            company: "Connectwise",
            id: "1"
          }}
          //Passing Function to a component
          test={renderorNot}
        />
        <hr />
        <HOCDetails
          details={{
            id: 1,
            name: "Mayank",
            age: 30,
            designation: "Developer",
            salary: 30000,
            bonus: 2000
          }}
          //Passing Function to a component
          test={renderorNot}
        />
        <hr />
        <h2> Todo List</h2>
        <MyLst />
        <MyLst />
        <MyLst />
      </div>
    </main>
  );
}

function renderorNot(id, innerHtml, obj) {
  console.log(obj);
  if (id != 2) {
    obj.innerHTML = innerHtml;
  }
}

function MyLst() {
  return (
    <div>
      <input type="checkbox" name="Todo 1" value="Todo 1" />
      <p> Todo 1</p>
    </div>
  );
}

export default MyApp;
