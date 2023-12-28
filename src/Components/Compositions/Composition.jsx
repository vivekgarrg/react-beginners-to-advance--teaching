import MainCard from "./components/MainCard";


const data = [{
    cardTitle:"Hello card title 1",
    body:"lorem ipsum dolor sit amet",
    button1:"Edit",
    button2:"Delete",
    id:1
}, {
    cardTitle:"Hello card title 2",
    body:"lorem ipsum dolor sit amet",
    button1:"Update",
    button2:"Delete",
    id:2
},{
    cardTitle:"Hello card title 3",
    body:"lorem ipsum dolor sit amet",
    button1:"Add",
    button2:"Update",
    id:3
},{
    cardTitle:"Hello card title 3",
    body:"lorem ipsum dolor sit ametssa sMSAMSanmnsa asas ,mansm m,sn,mdnfd fmdnm,fnds fdnfdms,mf",
    button1:"Add",
    button2:"Update",
    id:4
}]

//first component  & sabka parent component => Composition
export default function Composition() {

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", border:'1px solid red', padding:8 }}>
        
          {data.map((value)=><MainCard key={value.id} {...value}/>) }
        </div>
    )
}
