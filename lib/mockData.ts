// mockData.ts

const mockData = [
    { 
        id: 1,
        videoTitle: "Sample Video 1",
        watermarkPresent: true,
        watermarkPosition: "bottom-right",
        removalStatus: "pending"
    },
    {
        id: 2,
        videoTitle: "Sample Video 2",
        watermarkPresent: false,
        removalStatus: "completed"
    },
    {
        id: 3,
        videoTitle: "Sample Video 3",
        watermarkPresent: true,
        watermarkPosition: "top-left",
        removalStatus: "failed"
    }
];

export default mockData;