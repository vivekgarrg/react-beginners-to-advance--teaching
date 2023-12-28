import { useState } from "react";

export default function ListsAndKeys() {

  const [listArray, setListArray] = useState([{
    name:'first',
    id:1
  },{
    name:'last',
    id:2
  }, {name:'last', id:3}, {name:'first', id:4}]);


  const handleConcat = (value)=>{
    const selectedValue =  listArray.find((object)=>object.id === value.id);
    selectedValue.name = value.name +"a";
    const indexOfSelctedValue = listArray.indexOf(value);
    listArray[indexOfSelctedValue] = selectedValue;
    setListArray([...listArray])
  }
  return (
    <div>
      <ul>
        {listArray.map((value)=><li key={value.id}>{value.name} <button onClick={()=>handleConcat(value)}>+</button></li>)}
      </ul>
    </div>
  )
}
