export function Button({ text, type }) {
    let buttonClass;
    switch (type) {

        case "black":
            buttonClass = 'button button--black';
            break;
        case "transparent":
            buttonClass = 'button button--transparent';
            break;
        default:
            buttonClass = 'button button--white';
            break;
    }

    return (
        <>
            <button className={buttonClass}>{text}</button>
        </>
    )

}


