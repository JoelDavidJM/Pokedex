import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PortectecRoute = () => {

    const trainer = useSelector(state => state.triner)

  if(trainer.length >= 3) {
    return <Outlet/>
  }else {
    return <Navigate to='/' />
  }
}

export default PortectecRoute