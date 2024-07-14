export default function Input({...props}) {

  return (
    <input {...props} value={props.value} checked={!props.value} readOnly /> 
  )
}