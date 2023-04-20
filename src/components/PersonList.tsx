type PersonListProps = {
  listNames: {
    firstName: string;
    lastName: string;
  }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <>
      {props.listNames.map((name) => (
        <>
            <h2>{name.firstName} {name.lastName}</h2> 
        </>
      ))}
    </>
  );
};
