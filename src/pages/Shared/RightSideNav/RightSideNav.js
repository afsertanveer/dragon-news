import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from './../../../contexts/AuthProvider/AuthProvider';

const googleprovider = new GoogleAuthProvider();
const RightSideNav = () => {
  const {providerLogin} = useContext(AuthContext);
  const handleGoogleSignIn=()=>{
    providerLogin(googleprovider)
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>{
      console.error('Error: ',error);
    })
  }
    return (
      <div>
        <ButtonGroup vertical>
          <Button onClick={handleGoogleSignIn} className="mb-2" variant="outline-primary">
            <FaGoogle></FaGoogle> Login with Google
          </Button>
          <Button variant="outline-dark">
            <FaGithub></FaGithub> Login with Github
          </Button>
        </ButtonGroup>

        <div className="mt-4">
          <h2 className="mb-3">Find us on</h2>
          <ListGroup>
            <ListGroup.Item className="mb-4">
              <FaFacebook className="me-3"></FaFacebook>Facebook
            </ListGroup.Item>
            <ListGroup.Item className="mb-4">
              <FaYoutube className="me-3"></FaYoutube>Youtube
            </ListGroup.Item>
            <ListGroup.Item className="mb-4">
              <FaTwitter className="me-3"></FaTwitter>Twitter
            </ListGroup.Item>
            <ListGroup.Item className="mb-4">
              <FaWhatsapp className="me-3"></FaWhatsapp>
              Whatsapp
            </ListGroup.Item>
            <ListGroup.Item className="mb-4">
              <FaTwitch className="me-3"></FaTwitch>Twitch
            </ListGroup.Item>
          </ListGroup>
        </div>

        <div>
         <BrandCarousel></BrandCarousel>
        </div>
      </div>
    );
};

export default RightSideNav;