import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow } from "../../actions/auth";
import axios from "axios";
function isEmpty(strIn)
{
    if (strIn === undefined)
    {
        return true;
    }
    else if(strIn == null)
    {
        return true;
    }
    else if(strIn == "")
    {
        return true;
    }
    else
    {
        return false;
    }
}
const Followbott = ({ idToFollow}) => {
    const userData = useSelector((state) => state.auth.user);
    const [isFollowed, setIsFollowed] = useState(false);
    const dispatch = useDispatch();
    
  
    const handleFollow = () => {
      dispatch(follow(userData.id, idToFollow));
      setIsFollowed(true);
      
    };
    useEffect(() => {
        if (!isEmpty(userData.following)) {
          if (userData.followings.includes(idToFollow)) {
            setIsFollowed(true);
          } else setIsFollowed(false);
        }
      }, [userData, idToFollow]);

      return (
        <>
          {isFollowed === false && !isEmpty(userData) && (
            <span onClick={handleFollow}>
              <div className='btn btn-primary'>
          Follow </div>
            </span>
          )}
        </>
      );
}  
export default Followbott;