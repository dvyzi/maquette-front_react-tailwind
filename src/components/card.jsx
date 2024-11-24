export function CakeCard(props) {
    return (
        <div className="cardContain z-20">
            <img className="z-10" src={props.img} alt="" />
            <h3 className="bg-[#FF7F00] text-white text-center w-3/5 rounded-2xl px-2 py-2">{props.title}</h3>
            <p className="description-p">{props.description}</p>
        </div>
    );
}