export const ratingColor = (rating: number) => {
    if (rating >= 7) return "success";
    if (rating >= 5) return "warning";
    return "error";
};