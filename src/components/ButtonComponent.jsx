import Button from 'react-bootstrap/Button';



const ButtonComponent = (props) => {

    return (
        <div className='btn-div'>
            <button className={props.bgColor}>{props.btnInput}</button>
            <Button as="a" variant={props.btnVariant}>
                Button as link
            </Button>
        </div>


    )

}


export default ButtonComponent;