import axios from 'axios';
import { baseUrl, baseUrl_1 } from '.';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const token = localStorage.getItem('access_token');
export const refresh_tkn = localStorage.getItem('refresh_token');
export const u_role = localStorage.getItem('user_role');
export const usrID = localStorage.getItem('userID');

export const token_1 = localStorage.getItem('access_token_1');
export const refresh_token_1 = localStorage.getItem('refresh_token_1');
export const user_role = localStorage.getItem('user_role_1') || null;
export const userID = localStorage.getItem('userID_1') || null;
const user_id = { user_id: !isNaN(usrID) ? Number(usrID) : null };
// const user_id_1 = { user_id_1: !isNaN(userID) ? Number(userID) : null };
export let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: token,
  },
};
export let axiosConfig_1 = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: token_1,
  },
};

//private routes function
export const PrivateRoutes = ({ children }) => {
  // const token = localStorage.getItem('access_tkn');
  // console.log("token  fetched",token);
  const isAuthenticated = !!token;
  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    console.log("error is here");
    return <Navigate to="/auth/login" />;
  }
};

// Login function
export async function loginFunction(loginPayload) {
  console.log('SUCCESSFUL RESPONSE loginPayload', loginPayload, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
  try {
    const [response1, response2] = await Promise.all([
      axios.post(`${baseUrl}/login`, loginPayload),
      axios.post(`${baseUrl_1}/login`, loginPayload)
    ]);

    console.log('SUCCESSFUL RESPONSE', response1, response2);

    const access_token = response1?.data?.access_token;
    const refresh_token = response1?.data?.refresh_token;
    const user_role = response1?.data?.role?.[0];
    const userID = response1?.data?.role?.[1];

    const access_token_1 = response2?.data?.access_token;
    const refresh_token_1 = response2?.data?.refresh_token;
    const user_role_1 = response2?.data?.role?.[0];
    const userID_1 = response2?.data?.role?.[1];

    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
    localStorage.setItem('user_role', user_role);
    localStorage.setItem('userID', userID);

    localStorage.setItem('access_token_1', access_token_1);
    localStorage.setItem('refresh_token_1', refresh_token_1);
    localStorage.setItem('user_role_1', user_role_1);
    localStorage.setItem('userID_1', userID_1);

    window.location.href = '/dashboard';
    // window.location.href = '/linkedin';
    
  } catch (err) {
    console.log('ERROR RESPONSE', err);
    return err;
  }
}
// register function
export async function signupFunction(Payload) {
  try {
    const [response1, response2] = await Promise.all([
      axios.post(`${baseUrl}/signup`, Payload, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      }),
      axios.post(`${baseUrl_1}/signup`, Payload, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
    ]);

    console.log('SUCCESSFUL RESPONSE', response1, response2);

    toast.success('Sign up Succesful.', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });

    setTimeout(function () {
      window.location.href = '/auth/login';
    }, 1300);
  } catch (err) {
    console.log('ERROR RESPONSE', err);
    toast.error('Signup Failed.', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
    return err;
  }
}
// register function
export async function resetPasswordFunction(Payload) {
  try {
    const [response1, response2] = await Promise.all([
      axios.post(`${baseUrl}/reset_password`, Payload),
      axios.post(`${baseUrl_1}/reset_password`, Payload)
    ]);

    console.log('SUCCESSFUL RESPONSE', response1, response2);

    toast.success('Password Reset Successful.', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });

    setTimeout(function () {
      window.location.href = '/auth/login';
    }, 1300);
  } catch (err) {
    console.log('ERROR RESPONSE', err);
    toast.error('Reset Failed.', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
    return err;
  }
}

// export async function logoutFunction() {
//   console.log('user_id', user_id);
//   console.log('user_id_1', user_id_1);
//   const res = await axios.post(`${baseUrl_1}/logout`,user_id_1)
    
//   try {
//     // const [response1, response2] = await Promise.all([
//     //   axios.post(`${baseUrl}/logout`, { "user_id": user_id }),
//     //   axios.post(`${baseUrl_1}/logout`, { "user_id": user_id_1 })
//     // ]);
//     // const res = await axios.post(`${baseUrl_1}/logout`,user_id_1)
//     console.log('response', res);

//     // console.log('successful logout', response1, response2);

//     toast.success('Logout Successful', {
//       position: toast.POSITION.TOP_RIGHT,
//       autoClose: 600,
//     });
//   } catch (err) {
//     console.log('ERROR RESPONSE', err);
//     toast.error('Failed.', {
//       position: toast.POSITION.TOP_RIGHT,
//       autoClose: 3000,
//     });
//   } ;
//   // finally {
//   //   // Remove items from local storage
//   //   localStorage.removeItem('access_token');
//   //   localStorage.removeItem('refresh_token');
//   //   localStorage.removeItem('user_role');
//   //   localStorage.removeItem('access_tkn');
//   //   localStorage.removeItem('refresh_tkn');
//   //   localStorage.removeItem('u_role');

//   //   // Redirect user /linkedin
//   //   window.location.replace('/auth/login');
//   // }
// }
export async function logoutFunction() {
  await axios
    .post(`${baseUrl}/logout`, user_id)
    .then(function (response) {
      // console.log('succesful logout', response);
     
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_role');
    localStorage.removeItem('userID');

    localStorage.removeItem('access_token_1');
    localStorage.removeItem('refresh_token_1');
    localStorage.removeItem('user_role_1');
    localStorage.removeItem('userID_1');
    

    // Redirect user /linkedin
   
      toast.success('Logout Successful', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 600
      });
      // window.location.replace('/login');
      window.location.replace('/auth/login');
    })
    .catch((err) => {
      console.log('ERROR RESPONSE', err);
      toast.error('Failed.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      });

      //   window.location.replace('/login');
    });
}

export function logoutFunctioncustom() {
  localStorage.removeItem('access_tkn');
  localStorage.removeItem('refresh_tkn');
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');  
  localStorage.removeItem('user_role');
  localStorage.removeItem('u_role');
  window.location.replace('/auth/login');
  console.log('ERROR RESPONSE');
}

export async function statusFunction() {
  await axios
    .get(`${baseUrl}/status`, axiosConfig)
    .then(function (response) {
      console.log('status', response);
    })
    .catch((err) => {
      console.log('ERROR RESPONSE', err);

      //   window.location.replace('/login');
    });
}
export async function statusFunction_1() {
  await axios
    .get(`${baseUrl_1}/status`, axiosConfig_1)
    .then(function (response) {
      console.log('status', response);
    })
    .catch((err) => {
      console.log('ERROR RESPONSE', err);

      //   window.location.replace('/login');
    });
}
PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
