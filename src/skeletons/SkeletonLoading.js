import Skeleton from "react-loading-skeleton";
import "./SkeletonLoading.css";

const SkeletonLoading = () => {
  return (
    <div>
      <div className="skeleton-one">
        <Skeleton count={1} height={40} width={450} />
      </div>
      <div className="skeleton-two">
        <Skeleton count={1} height={50} width={280} />
      </div>
      <div className="skeleton-three">
        <Skeleton count={1} height={20} width={450} />
        <Skeleton count={1} height={20} width={450} />
      </div>
      <div className="skeleton-icon">
        <Skeleton count={1} height={60} width={60} />
      </div>
    </div>
  );
};

export default SkeletonLoading;
