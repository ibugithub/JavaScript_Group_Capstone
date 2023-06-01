async function createApp() {
  try {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
      {
        method: 'POST',
      },
    );
    const data = await response.text();
    return data;
  } catch (error) {
    return error;
  }
}
createApp();
