const graphcmsKey =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MDg0MDY0MDEsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NraXcza3cwaTk4bzEwMXh1MXE3MmU0cmQvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZWRlMzQwNWYtZmUxYS00NDhmLWJhNjMtZWM4ZTdkOTJkZjNlIiwianRpIjoiY2tpdzNuNXdmOWM2czAxejFnM2c2YmZpeSJ9.Zzi64HT-KreODniGWgWhaGXedbj4Stig0YNmDLhE4-pWn_p36XfBxWaf0D8q6p2-sUiwvc6dLVV9VjJ4v8mB_Jia6IzJbbQGVsX_eiX4XtCYrZ9QZI6UxpdYGz1e6j8VxtBjcBVGi0lPskTKI7WLBI7Wp23W7IHGJ_Xhq0ALmHr4WFK0m0bJ8nyfCFimvbSxxlISDs0Gl_CEoJoLWFwU2SDBTNCbwjzbm9MpwTNiKnztfLXnS5hUjLm1TglMIfEuQxndz3cSu5lJQxeei32-z1HWlj3nJ5ekHubXj8KJR5UGxmxCakauXmw434Sh3xk1Y1a25qHiVpFoxWDL04Xa3vvAoYX6R9jPVUBvHsv0_ND11FLHO-ilYmBXgz1LmrdYiXukFZzou0c1vwm38OtWGF6uKZcCqcpVaDrFahJ65Y5eNaTTP7RCKO9IJMo1ybe_46lGdL0Fkw9rlXSqRhZf3mhOOSci6zopuUCoeuaqu0GXJ0Jr-9ofJK-3RzffnjO70UYspEX1HzJaX4NjeuLRn6mPQdpBI3-YxafFfLGV22tUN3XkURG7IL9rkVA9RxXoODssc9zIHlTqSrzpbaSTJdeid-kV3wAwihHAJnyexdKzp7wmaZIdSx2ZImJ36AWq7SKXCqQnJ80PdKGOfmbPymcZqsVz1KPP7jsTf_aRE4c";
const graphcmsEndpoint =
  "https://api-eu-central-1.graphcms.com/v2/ckiw3kw0i98o101xu1q72e4rd/master";

export const request = async (query: string) => {
  try {
    const response = await fetch(graphcmsEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${graphcmsKey}`,
      },
      body: JSON.stringify({
        query,
      }),
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const getData = async (query: string) => {
  const { data } = await request(query);
  return data;
};
