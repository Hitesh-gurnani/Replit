import { useState } from 'react'
import usePing from '../../hooks/apis/queries/usePing';


function PingComponent() {
    const [isVisible, setIsVisible] = useState(false);
  const { data , isLoading } = usePing();
  if(isLoading)
    return <div>Loading...</div>

  return (
    <>
      Hello
    </>
  )
}

export default PingComponent
