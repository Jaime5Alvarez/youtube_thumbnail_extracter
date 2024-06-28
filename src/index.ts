const youtubeUrl = 'https://youtu.be/DJyZtXwUjIE?si=wgBTHpk7BqTfaIuN&t=8';

const getYoutubeVideoId = (url: string): string | null => {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
};

const getYoutubeThumbnails = (videoId: string) => {
    const thumbnails = {
        default: `https://img.youtube.com/vi/${videoId}/default.jpg`,
        medium: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        high: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        standard: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
        maxres: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    };
    return thumbnails;
};

const extractThumbnailsFromUrl = (url: string) => {
    const videoId = getYoutubeVideoId(url);
    if (videoId) {
        return getYoutubeThumbnails(videoId);
    } else {
        throw new Error('Invalid YouTube URL');
    }
};

// Example usage:
try {
    const thumbnails = extractThumbnailsFromUrl(youtubeUrl);
    console.log(thumbnails);
} catch (error) {
    console.error(error);
}
