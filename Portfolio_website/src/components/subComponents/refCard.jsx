import './css/refCard.css';

const RefCard = ({ref,referrer})=>{
    return(
        <div className="refCard">
            <img src={ref} className="refImg"/>
            <h4 className="referrer">{referrer}</h4>
            <hr></hr>
            <button onClick={()=>{

                window.open(ref,'_blank')
                
            
            }
                
            }>
                View Reference
            </button>

        </div>
    )
}

export default RefCard;