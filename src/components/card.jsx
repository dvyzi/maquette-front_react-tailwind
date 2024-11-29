export function CakeCard(props) {
    return (
        <div className="cardContain">
            <img className="z-10" src={props.img} alt="" />
            <h3 className="bg-black text-white text-center w-3/5 rounded-2xl px-2 py-2">{props.title}</h3>
            <p>Prix : {props.price}€</p>
            <p className="miniDescription px-4">{props.description}</p>
        </div>
    );
}