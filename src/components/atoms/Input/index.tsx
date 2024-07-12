export default function InputToggle({...props}) {

  return (
    <input {...props} value={props.value} checked={!props.value} readOnly /> 
  )
}