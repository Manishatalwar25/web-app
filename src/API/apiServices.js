// apiService.js
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;  
// Update the base URL if needed
  // Retrieve the `userId` from local storage

  const getAuthToken = () => {
    return localStorage.getItem('userToken') || ''; // or you could extract from headers in case of server-side requests
  };
  
// Function to handle POST requests
export const postApi = async (endpoint, data) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Something went wrong');
    }
    return result;
  } catch (error) {
    throw new Error(error.message || 'Server error');
  }
};

// Function to handle GET requests
export const getApi = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Something went wrong');
    }
    return result;
  } catch (error) {
    throw new Error(error.message || 'Server error');
  }
};

export const createPhylloUser = async () => {
  let userId = localStorage.getItem("userId");
  const token = getAuthToken();
  if (!userId) {
    // Option 2: Generate a fallback userId if not present in localStorage
    userId = Date.now().toString();  // Generate a unique user ID based on the current timestamp
    console.log("User ID not found. Using fallback ID:", userId);
  }

  try {
    // Generate external_id using userId
    const external_id = `Cashfluence-${userId}`;

    // Make the API request
    const response = await axios.post(`${BASE_URL}/phyllo/create-user`, {
      external_id: external_id // Send external_id as part of the request body
    }, {
      headers: {
        'Authorization': `Bearer ${token}` // Add token to the request headers
      }
    });

    return response.data.userData; // return the user object with `userData` property
  } catch (error) {
    console.error('Error creating Phyllo user:', error);
    throw error;
  }
};



export const createSDKtoken = async () => {
  const token = getAuthToken();
  try {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      throw new Error("User ID not found in local storage.");
    }

    // Include `user_id` in the request body
    const response = await axios.post(`${BASE_URL}/phyllo/sdk-token`, {
      user_id: userId, // Pass the retrieved user ID
    }, {
      headers: {
        'Authorization': `Bearer ${token}` // Add token to the request headers
      }
    });
    return response.data; // Return the SDK token response
  } catch (error) {
    console.error("Error creating Phyllo SDK token:", error);
    throw error;
  }
};


export const getPlatFormNameAndId = async () => {
  const token = getAuthToken();
  const userId = localStorage.getItem("userId");
  if (!userId) {
    throw new Error("User ID not found in local storage.");
  }

  try {
    const response = await axios.get(`${BASE_URL}/api/phyllo/platforms`, {
      params: { user_id: userId }, // Pass the user_id as a query parameter
      headers: {
        'Authorization': `Bearer ${token}` // Add token to the request headers
      }
    });
  
    return response?.data?.platforms; // Return the platform data
  } catch (error) {
    console.error('Error fetching Phyllo platforms:', error);
    throw error;
  }
};




export const getSocialAccount = async ({ workPlatformId, userId, limit = 10, offset = 0 }) => {
  const token = getAuthToken();
  if (!userId) {
    throw new Error("User ID not found in local storage.");
  }

  try {
    const response = await axios.get(`${BASE_URL}/phyllo/social/accounts`, {
      params: {
        user_id: userId,
        work_platform_id: workPlatformId,
        limit,
        offset,
      },  
      headers: {
        'Authorization': `Bearer ${token}` // Add token to the request headers
      },
     
    });

    console.log("API Response:", response);
    return response?.data; // Return the full response for flexibility
  } catch (error) {
    console.error("Error fetching social accounts:", error);
    throw error;
  }
};



export const getDataFromDatabase = async ({ userId }) => {
  const token = getAuthToken();
  if (!userId) {
    throw new Error("User ID not found in local storage.");
  }

  try {
    const response = await axios.get(`${BASE_URL}/phyllo/fetchDataFromdatabase`, {
      params: {
        userId: userId,
    
       
      },   headers: {
        'Authorization': `Bearer ${token}` // Add token to the request headers
      },
     
    });

    console.log("API Response:", response);
    return response?.data; // Return the full response for flexibility
  } catch (error) {
    console.error("Error fetching social accounts:", error);
    throw error;
  }
};



export const deletePlatformDataFromDatabase = async ({ userId, platformName }) => {
  const token = getAuthToken();
  try {
    const response = await axios.delete(`${BASE_URL}/phyllo/deletePlatformData`, {
      data: {
        userId: userId,
        platformName: platformName,
      },
      headers: {
        'Authorization': `Bearer ${token}` // Add token to the request headers
      },
    });

    if (response?.data?.success) {
      console.log(`${platformName} data deleted successfully from the database.`);
    } else {
      console.error(`Failed to delete ${platformName} data from the database.`);
    }
  } catch (error) {
    console.error("Error while deleting platform data:", error);
    throw error; // Ensure the error is propagated
  }
};