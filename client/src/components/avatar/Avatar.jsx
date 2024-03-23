
import avatar from "../../assets/frontend/img/avater.png" 

const Avatar = ({ url }) => {
  return (
    <>
      <img className="rounded-circle" src={url ? url : avatar} alt="" />
    </>
  )
}

export default Avatar; 














