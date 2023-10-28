export const getFacebookUrl = (from) => {
  const rootUrl = 'https://www.facebook.com/v18.0/dialog/oauth'
  const options = {
    client_id: import.meta.env.VITE_FACEBOOK_OAUTH_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_API_URL + "auth/facebook",
    response_type: "code",
    scope: [
      'public_profile, email'
    ],
    state: from
  }
  const qs = new URLSearchParams(options);
  return `${rootUrl}?${qs.toString()}`;
}