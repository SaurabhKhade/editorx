export default function Switch({label,enabled}) {
  
  const style = {
    backgroundColor: `var(${enabled?'--switch':'--tab-bg'})`
  }
  
  return (
    <div>
      <p>{label}</p>
      <div className="switch">
        <div style={style}>
        </div>
      </div>
    </div>
  )
}