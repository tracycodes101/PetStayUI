window.PETSTAY_CONFIG = {
  AWS_REGION: "us-east-2",
  COGNITO_USER_POOL_ID: "us-east-2_CJrYNzRUD",
  COGNITO_USER_POOL_CLIENT_ID: "43o3bunon9egnasufkleviefml",
  COGNITO_DOMAIN: "us-east-2cjrynzrud.auth.us-east-2.amazoncognito.com",

  REDIRECT_SIGN_IN_URL: "https://main.d2e5ikjs7s989k.amplifyapp.com/admin-frontend/post-login.html",
  REDIRECT_SIGN_OUT_URL: "https://main.d2e5ikjs7s989k.amplifyapp.com/index.html",
  REDIRECT_ADMIN_SIGN_IN_URL: "https://main.d2e5ikjs7s989k.amplifyapp.com/admin-frontend/post-login.html",

  API_BASE_URL: 'https://pe3tysfmt5.execute-api.us-east-2.amazonaws.com/deployed',
  BOOKINGS_API_URL: "https://pe3tysfmt5.execute-api.us-east-2.amazonaws.com/deployed/booking",
  BOOKING_STATUS_API_URL: 'https://pe3tysfmt5.execute-api.us-east-2.amazonaws.com/deployed/bookingStatus',
  BOOKINGS_API_URL: "https://pe3tysfmt5.execute-api.us-east-2.amazonaws.com/deployed/bookings",
  ROOMS_AVAILABILITY_API_URL: 'https://pe3tysfmt5.execute-api.us-east-2.amazonaws.com/deployed/rooms/availability',
  NEW_BOOKING_API_URL: 'https://pe3tysfmt5.execute-api.us-east-2.amazonaws.com/deployed/newbooking',
  CONFIRM_BOOKING_URL: 'https://pe3tysfmt5.execute-api.us-east-2.amazonaws.com/deployed/confirm',
  CANCEL_BOOKING_URL: 'https://pe3tysfmt5.execute-api.us-east-2.amazonaws.com/deployed/cancel',
  CHECKIN_BOOKING_URL: 'https://pe3tysfmt5.execute-api.us-east-2.amazonaws.com/deployed/checkin',
  CHECKOUT_BOOKING_URL: 'https://pe3tysfmt5.execute-api.us-east-2.amazonaws.com/deployed/checkout',
  RESTORE_BOOKING_URL: 'https://pe3tysfmt5.execute-api.us-east-2.amazonaws.com/deployed/restore',
  PET_PHOTO_UPLOAD_URL: 'https://pe3tysfmt5.execute-api.us-east-2.amazonaws.com/deployed/upload-url',
  PET_PHOTO_PUBLIC_URL_BASE: 'https://petstayphotos1.s3.amazonaws.com',
};

// Safety check: crash the page if placeholders were not replaced
for (const key in window.PETSTAY_CONFIG) {
  if (window.PETSTAY_CONFIG[key].includes("{{") || window.PETSTAY_CONFIG[key].includes("}}")) {
    throw new Error(`Missing config value: ${key}. Did you forget to set environment variables?`);
  }
}
