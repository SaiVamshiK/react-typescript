type GreetProps = {
  name: string;
  count: number;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <>
      {props.isLoggedIn ? (
        <div>
          <h2>
            Welcome {props.name}! You have {props.count} unread messages
          </h2>
        </div>
      ) : (
        <div>
          <h2>
            Welcome!
          </h2>
        </div>
      )}
    </>
  );
};
