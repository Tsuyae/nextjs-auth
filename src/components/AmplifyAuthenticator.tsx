import React from 'react'
import { Amplify } from 'aws-amplify'
import awsExports from '../aws-exports.js'
import { Authenticator, ThemeProvider, Theme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

type Props = { }

Amplify.configure(awsExports);



export default function AmplifyAuthenticator() {
    const loginTheme: Theme = {
      name: 'Login Panel Theme',
      tokens: {
        colors: {
          background: {
            primary: {
              value: '#FFFFFF',
            },
            secondary: {
              value: '#FAFAFA',
            },
          },
          font: {
            interactive: {
              value: '#ED3F55',
            },
          },
          brand: {
            primary: {
                '10': '#ed3f5529',
                '20': '#ed3f5529',
                '40': '#ed3f5529',
                '60': '#ed3f5529',
                '80': '#ED3F55',
                '90': '#ed3f55e3',
                '100': '#ED3F55'
            },
          },
        },
        components: {
          tabs: {
            item: {
              _focus: {
                color: {
                  value: '#FFFFFF',
                },
              },
              _hover: {
                color: {
                  value:  '#ED3F55'
                },
              },
              _active: {
                color: {
                  value:  '#ED3F55'
                },
              },
            },
          },
        },
      },
    };
  
    return (
      <ThemeProvider theme={loginTheme}>
        <Authenticator></Authenticator>
      </ThemeProvider>
    );
}