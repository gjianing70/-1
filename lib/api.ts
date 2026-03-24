// lib/api.ts

// Function to remove watermark from a specified video
export const removeWatermark = async (videoUrl: string, apiKey: string): Promise<any> => {
    const response = await fetch('https://api.example.com/remove-watermark', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ videoUrl }),
    });

    if (!response.ok) {
        throw new Error('Error removing watermark: ' + response.statusText);
    }

    return await response.json();
};

// Function to check the status of watermark removal
export const checkRemovalStatus = async (jobId: string, apiKey: string): Promise<any> => {
    const response = await fetch(`https://api.example.com/check-status/${jobId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
        },
    });

    if (!response.ok) {
        throw new Error('Error fetching status: ' + response.statusText);
    }

    return await response.json();
};
