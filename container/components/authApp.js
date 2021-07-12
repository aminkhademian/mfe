import React from "react"
import { mount } from "auth/AuthApp"
import { useHistory } from "react-router-dom"

export default () => {
  const ref = React.useRef(null)
  const history = useHistory()

  React.useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location,
      onNavigate: ({pathname: nextPathname}) => {
        const { pathname } = history.location
        if(pathname !== nextPathname) history.push(nextPathname)
      }
    })

    history.listen(onParentNavigate)
  }, [])


  return (
    <div ref={ref} />
  )
} 