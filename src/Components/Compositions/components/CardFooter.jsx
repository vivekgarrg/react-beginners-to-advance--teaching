//one of the child of MainCard
export default function CardFooter({button1, button2}) {
  return (
    <div style={{padding:8, display:'flex', justifyContent:"center", gap:8}}>
        <button>{button1}</button>
        <button>{button2}</button>
    </div>
  )
}
