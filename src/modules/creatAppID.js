async function createApp() {
  try {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
      {
        method: 'POST',
      },
    );
    const data = await response.text();
    console.log('App created successfully. App ID:', data);
  } catch (error) {
    console.error('Error creating app:', error);
  }
}

createApp();
