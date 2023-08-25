import {
  MDBBtn,
  MDBCheckbox,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';

import { CART_PATH } from '../../App';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [justifyActive, setJustifyActive] = useState('tab1');

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (justifyActive === 'tab1') {
      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (storedUser && storedUser.email === email && storedUser.password === password) {
        toast.success('Login successful!');
        navigate(CART_PATH);
      } else {
        toast.error('Invalid email or password. Please try again.');
      }
    } else if (justifyActive === 'tab2') {
      if (password !== confirmPassword) {
        toast.error('Passwords do not match.');
        return;
      }
      if (name && username && email && password && confirmPassword) {
        const user = {
          name,
          username,
          email,
          password,
        };
        localStorage.setItem('user', JSON.stringify(user));
        toast.success('Registration successful!');

        setName('');
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        toast.error('Please fill in all the fields.');
      }
    }
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between">
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      {/* // log in form */}

      <MDBTabsContent>
        <form onSubmit={handleSubmit}>
          <MDBTabsPane show={justifyActive === 'tab1'}>
            <div className="text-center mb-3">
              <p>Sign in with:</p>
              <div className="d-flex justify-content-between mx-auto" style={{ width: '40%' }}>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
              <p className="text-center mt-3">or:</p>
            </div>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
              <a href="!#">Forgot password?</a>
            </div>
            <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
            <p className="text-center">
              Not a member? <a href="#!">Register</a>
            </p>
          </MDBTabsPane>
        </form>
        {/* // register form */}
        <form onSubmit={handleSubmit}>
          <MDBTabsPane show={justifyActive === 'tab2'}>
            <div className="text-center mb-3">
              <p>Sign up with:</p>
              <div className="d-flex justify-content-between mx-auto" style={{ width: '40%' }}>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
              <p className="text-center mt-3">or:</p>
            </div>
            <MDBInput
              wrapperClass="mb-4"
              label="Name"
              id="form1"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Username"
              id="form1"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form1"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Confirm Password"
              id="form1"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div className="d-flex justify-content-center mb-4">
              <MDBCheckbox name="flexCheck" id="flexCheckDefault" label="I have read and agree to the terms" />
            </div>
            <MDBBtn className="mb-4 w-100" type="submit">
              Sign up
            </MDBBtn>
          </MDBTabsPane>
        </form>
      </MDBTabsContent>
    </MDBContainer>
  );
};

export default Login;
