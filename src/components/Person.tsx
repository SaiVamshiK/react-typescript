type PersonProps = {
    firstName: string,
    lastName: string
}

export const Person = (props: PersonProps) => {
    return (
        <div>
            <h2>{props.firstName} {props.lastName}</h2>
        </div>
    );
}
