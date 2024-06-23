function AppTime() {
  let time = new Date();

  return (
    <p>
      This is the current date {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default AppTime;
