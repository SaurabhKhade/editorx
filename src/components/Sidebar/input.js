export default function Input({label,value}) {
  return (
    <div>
      <p>{label}</p>
      <p className="hasInput">{value}</p>
    </div>
  );
}