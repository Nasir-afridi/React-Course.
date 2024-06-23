function Hello() {
  let MyName = "Muhammad Nasir";
  let Name = () => {
    return "Nasir Khan";
  };
  let MsgNo = "123321";
  return (
    <h1>
      Message No: {MsgNo} :: i am learning the React.My name is {Name()}
    </h1>
  );
}

export default Hello;
