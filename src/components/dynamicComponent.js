import React, { useEffect } from "react";
//Passing dynamic properties to components
function DC(props) {
  let innerHtml = `<h3>Mr. ${props.contact.name}</h3>
  <p> Age : ${props.contact.age} </p>
  <p> Company: ${props.contact.company} </p>`;
  let id = props.contact.id;
  useEffect(() => props.test(id, innerHtml, document.getElementById("DC")), []);

  return <div id="DC"></div>;
}

export default DC;
