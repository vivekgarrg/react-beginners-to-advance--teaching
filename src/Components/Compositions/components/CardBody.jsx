//one of the child of MainCard
export default function CardBody(props) {
    const { body } = props;
    return (
        <div style={{ paddingTop: 5, borderBottom: '1px solid gray', paddingBottom: 5 }}>
            {body}
        </div>
    )
}
