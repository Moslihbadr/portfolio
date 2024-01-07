const Logo = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="55" style={{ fontWeight: 'bold', fontSize: '25px' }}>
      <text x="0" y="50" style={{transform: 'translateY(-13px)'}} fill="#00BB67" letterSpacing="0.1em" fontFamily="Arial, sans-serif">{"<B"}</text>
      <text x="35" y="50" style={{transform: 'translateY(-13px)'}} fill={color} fontFamily="Arial, sans-serif">adr</text>
      <text x="85" y="50" style={{transform: 'translateY(-13px)'}} fill="#00BB67" letterSpacing="0.1em" fontFamily="Arial, sans-serif">{"/>"}</text>
    </svg>
  );
};

export default Logo;