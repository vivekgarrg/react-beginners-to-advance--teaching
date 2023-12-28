//one of the child of MainCard
export default function CardTop(props) {
    const {title} = props;
  return (
    <div style={{borderBottom:'1px solid grey'}}>
        <h4>{title}</h4>
    </div>
  )
}
