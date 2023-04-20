
type GreetProps = {
  name: string,
  count: number,
  isLoggedIn: boolean
};

export const Greet = (props : GreetProps) => {
    return (
      <>
        <h2>{props.name} has {props.count} unread messages</h2>
      </>
    );
}
