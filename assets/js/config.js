window.PETSTAY_CONFIG = {
  AWS_REGION: "us-east-2",
  COGNITO_USER_POOL_ID: "us-east-2_CJrYNzRUD",
  COGNITO_USER_POOL_CLIENT_ID: "43o3bunon9egnasufkleviefml",
  COGNITO_DOMAIN: "us-east-2cjrynzrud.auth.us-east-2.amazoncognito.com",

  REDIRECT_SIGN_IN_URL: "https://main.d2e5ikjs7s989k.amplifyapp.com/admin-frontend/post-login.html",
  REDIRECT_SIGN_OUT_URL: "https://main.d2e5ikjs7s989k.amplifyapp.com/index.html",
  REDIRECT_ADMIN_SIGN_IN_URL: "https://main.d2e5ikjs7s989k.amplifyapp.com/admin-frontend/post-login.html",

  BOOKINGS_API_URL: "{{BOOKINGS_API_URL}}",
  ROOMS_AVAILABILITY_API_URL: "{{ROOMS_AVAILABILITY_API_URL}}",
  NEW_BOOKING_API_URL: "{{NEW_BOOKING_API_URL}}",
  CHECKIN_API_URL: "{{CHECKIN_API_URL}}"
};

// Safety check: crash the page if placeholders were not replaced
for (const key in window.PETSTAY_CONFIG) {
  if (window.PETSTAY_CONFIG[key].includes("{{") || window.PETSTAY_CONFIG[key].includes("}}")) {
    throw new Error(`Missing config value: ${key}. Did you forget to set environment variables?`);
  }
}
