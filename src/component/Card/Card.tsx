import './Card.css'


interface CardProps {
    card: any,
    hidden?: boolean,
    handleClick?: () => void
}

const Card = ({card, hidden, handleClick}: CardProps) => {
    return (
        
        <div className={hidden ? 'hidden-container' : 'container'} onClick={handleClick}>
            {!hidden && <div className='card-body'>
                    <div className='suit-number-right'>
                    {card.displayValue}
                    </div>
                    <div className='suit-number-left'>
                        {card.displayValue}
                    </div>
                    
                    <div className='suit'>
                    <img className='suit-img' src={card.img} alt='cards'/>
                    </div>
            </div>}
        </div>
    )
};




export default Card;



