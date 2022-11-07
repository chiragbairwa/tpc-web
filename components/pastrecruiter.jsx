const PastRecruit = () => {
    const Card = ()=>  <div className="recruit-card"></div>;
  
    return (
      <div className="recruit">
        {/* Banner */}
        <div className="past-recruit-banner">
          <h2>Why Recruit at DCSA, Panjab University?</h2>
        </div>
  
        {/* Cards */}
        <div className="past-recruit-card-container">
          <Card />
        </div>
      </div>
    );
  };
  
  export default PastRecruit;
  