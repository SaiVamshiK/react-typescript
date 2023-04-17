type StatusProps = {
  status: "loading" | "success" | "error"
};

export const Status = (props: StatusProps) => {
  return (
    <div>
      {props.status === "loading" ? (
        <h2>Loading...</h2>
      ) : props.status === "success" ? (
        <h2>Data fetched successfully</h2>
      ) : (
        <h2>Error Fetching data</h2>
      )}
    </div>
  );
};
