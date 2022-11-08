import Image from 'next/image'

const PastRecruit = () => {
  const Logo = (props) => (
    <Image src={props.src} width="150" height="80" alt="Logo" />
  )

  return (
    <div className="past-recruit" id="pastrecruit">
      {/* Banner */}
      <div className="past-recruit-banner">
        <h2>Why Recruit at DCSA, Panjab University?</h2>
      </div>

      <div className="past-recruit-card-container">
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
        <Logo src="/vercel.svg" />
      </div>
    </div>
  )
}

export default PastRecruit
