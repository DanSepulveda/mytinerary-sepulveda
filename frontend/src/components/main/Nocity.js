const Nocity = () => {
  return (
    <div className="nocity">
      <div
        style={{
          backgroundImage: "url('/assets/sad-panda.png')",
          height: "30vh",
        }}
      ></div>
      <div className="message">
        <h2>WE'RE SO SORRY</h2>
        <h3>NO MATCHES FOUND</h3>
        <h4>Please try another search</h4>
      </div>
    </div>
  );
};
export default Nocity;
