const updateLikeCount = async (itemId, count, url) => {
  const data = {
    item_id: itemId,
    likes: count,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to update like count. Server responded with status ${response.status}`
      );
    }

    console.log(`Updated like count for item ${itemId} successfully`);
  } catch (error) {
    console.error('Error updating like count:', error);
    throw error;
  }
};

export default updateLikeCount;
