const Recruit = () => {
  const Card = () => <div className="recruit-card"></div>

  return (
    <div className="recruit" id="whyus">
      {/* Banner */}
      <div className="recruit-banner">
        <h2>Why Recruit at DCSA, Panjab University?</h2>
      </div>

      {/* Cards */}
      <div className="recruit-card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Recruit
