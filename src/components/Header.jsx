import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/slices/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }

      return () => unsubscribe();
    });
  }, []);

  return (
    <div className=" absolute w-full px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex">
          <img
            className="w-14 h-14 rounded-full"
            src={user.photoURL}
            alt="profile-img"
          />
          <button className="cursor-pointer text-white" onClick={handleSignout}>
            (Signout)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
