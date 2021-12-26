import Skeleton from "react-loading-skeleton";
import "./SkeletonLoading.css";

const SkeletonLoading = () => {
  return (
    <div>
      <div className="skeleton-one">
        <Skeleton count={1} />
      </div>
      <div className="skeleton-two">
        <Skeleton count={1} />
      </div>
      <div className="skeleton-three">
        <Skeleton count={1} />
      </div>
    </div>
  );
};

export default SkeletonLoading();
