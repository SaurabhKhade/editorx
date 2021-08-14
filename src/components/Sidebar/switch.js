export default function Switch({enabled}) {
  
  const style = {
    backgroundColor: `var(${enabled?'--switch':'--tab-bg'})`
  }
  
  return (
    <div className="switch">
      <div style={style}>
      </div>
    </div>
  )
}