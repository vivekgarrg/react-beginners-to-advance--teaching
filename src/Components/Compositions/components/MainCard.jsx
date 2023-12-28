import CardTop from './CardTop'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

//ye child hai composition ka 
export default function MainCard(props) {


    //card ke 3 childs hai => 1.CardTop 2.CardBody 3.CardFooter
    return (
        <div style={{border:'1px solid gray', padding:8, borderRadius:8, maxWidth:200}}>
            <CardTop title={props?.cardTitle}/>
            <CardBody body={props?.body}/>
            <CardFooter button1={props.button1} button2={props.button2} />
        </div>
    )
}
