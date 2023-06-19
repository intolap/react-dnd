import React from 'react'
import FacebookLogin from '@greatsumini/react-facebook-login';

export default function Facebook() {
    return (
        <div>
            {/* default */}
            <FacebookLogin
                appId="407996201254961"
                onSuccess={(response) => {
                    console.log('Login Success!', response);
                }}
                onFail={(error) => {
                    console.log('Login Failed!', error);
                }}
                onProfileSuccess={(response) => {
                    console.log('Get Profile Success!', response);
                }}
            />

            {/* custom style */}
            {/* <FacebookLogin
                appId="481295407487888"
                style={{
                    backgroundColor: '#4267b2',
                    color: '#fff',
                    fontSize: '16px',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '4px',
                }}
            /> */}

            {/* custom render function */}
            {/* <FacebookLogin
                appId="1088597931155576"
                onSuccess={(response) => {
                    console.log('Login Success!', response);
                }}
                onFail={(error) => {
                    console.log('Login Failed!', error);
                }}
                onProfileSuccess={(response) => {
                    console.log('Get Profile Success!', response);
                }}
                render={({ onClick, logout }) => (
                    <CustomComponent onClick={onClick} onLogoutClick={logout} />
                )}
            /> */}

            {/* custom params, options */}
            {/* <FacebookLogin
                appId="481295407487888"
                useRedirect
                initParams={{
                    version: 'v10.0',
                    xfbml: true,
                }}
                dialogParams={{
                    response_type: 'token',
                }}
                loginOptions={{
                    return_scopes: true,
                }}
            /> */}
        </div>
    )
}