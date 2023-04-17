
type PersonListProps = {
    nameList: Array<string>
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.nameList.map((name) => <h2>{name}</h2>)}
        </div>
    );
}
