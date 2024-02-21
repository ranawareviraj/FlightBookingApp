// Environment configuration for production environment
export const environment = {
    production: false,
    // Firebase configuration - for Firebase services (Here authentication only)
    fireBase: {
      apiKey: "{{API_KEY}}",
      authDomain: "{{AUTH_DOMAIN}}",
      projectId: "{{PROJECT_ID}}",
      storageBucket: "{{STORAGE_BUCKET}}",
      messagingSenderId: "{{MESSAGING_SENDER_ID}}",
      appId: "{{APP_ID}}",
      measurementId: "{{MEASUREMENT_ID}}"
    },
    // API configuration - for REST API
    token: '{{token}}',
  };
  