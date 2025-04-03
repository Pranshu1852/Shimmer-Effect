declare class Shimmer {
    element: string;
    timer: number;
    constructor(element: string, timer: number);
    shimmerEffect(): void;
    removeShimmer(): void;
}
export default Shimmer;
