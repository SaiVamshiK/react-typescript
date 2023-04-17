
type PersonListProps = {
    listNames: {
        firstName: string,
        lastName: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.listNames.map((name) => <h2>{name.firstName}</h2>)}
        </div>
    );
}
