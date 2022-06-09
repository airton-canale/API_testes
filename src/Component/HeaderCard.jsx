import React from "react";
import "./Cards.css"

const  HeaderCard = ({data}) => {
  console.log (data)

return(
<div className="CardHeader">
  <p className="Temp"> Temperatura: {data?.current.temp_c}°</p>
  <img className="Region" src={data?.current.condition.icon} alt="icone do tempo" />
  <p>
    {data?.location.name}, {data?.location.region}, {data?.location.country}
  </p>
</div>
)
}

export default HeaderCard;
