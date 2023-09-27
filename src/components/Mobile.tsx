

const Mobile = () => {

  const mobileStyle: React.CSSProperties = {
    height: '100vh',
    width: '100%',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    background: '#F9FAFF',
  }
  return ( 
    <div style={mobileStyle}>
      <h3 style={{color: '#ff0000'}}>Not available on mobile</h3>
      <p>Kindly view on Desktop</p>
    </div>
   );
}
 
export default Mobile;