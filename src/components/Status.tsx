
type StatusProps = {
  status: string
};

export const Status = (props: StatusProps) => {
  return (
    <>
      <h2>Status: {props.status}</h2>
    </>
  );
};
