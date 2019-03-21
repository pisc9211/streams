import React, { Component } from 'react'

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '934044654736-3l5m3s6aarp22c2ogiim50iib1red032.apps.googleusercontent.com',
        scope: 'email'
      })
    })
  }

  render() {
    return <div>Google Auth</div>
  }
}

export default GoogleAuth;