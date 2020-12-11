const withHeading = (WrappedComponent) => {
  return (props) => (
    <div>
      <h1>Heading from HOC</h1>
      <WrappedComponent {...props} />                          
    </div>
  )
}

export { withHeading }