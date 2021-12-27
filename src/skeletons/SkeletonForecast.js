import Skeleton from "react-loading-skeleton";
import "./SkeletonLoading.css";

const SkeletonForecast = () => {
  return (
    <div className="SkeletonForecast">
      <div className="row">
        <div className="col-2">
          <div className="skeleton-day">
            <Skeleton count={1} height={20} width={50} />
          </div>
          <div className="skeleton-forecast-icon">
            <Skeleton count={1} height={50} width={50} />
          </div>
          <div className="skeleton-temp">
            <Skeleton count={1} height={20} width={50} />
          </div>
        </div>
        <div className="col-2">
          <div className="skeleton-day">
            <Skeleton count={1} height={20} width={50} />
          </div>
          <div className="skeleton-forecast-icon">
            <Skeleton count={1} height={50} width={50} />
          </div>
          <div className="skeleton-temp">
            <Skeleton count={1} height={20} width={50} />
          </div>
        </div>
        <div className="col-2">
          <div className="skeleton-day">
            <Skeleton count={1} height={20} width={50} />
          </div>
          <div className="skeleton-forecast-icon">
            <Skeleton count={1} height={50} width={50} />
          </div>
          <div className="skeleton-temp">
            <Skeleton count={1} height={20} width={50} />
          </div>
        </div>
        <div className="col-2">
          <div className="skeleton-day">
            <Skeleton count={1} height={20} width={50} />
          </div>
          <div className="skeleton-forecast-icon">
            <Skeleton count={1} height={50} width={50} />
          </div>
          <div className="skeleton-temp">
            <Skeleton count={1} height={20} width={50} />
          </div>
        </div>
        <div className="col-2">
          <div className="skeleton-day">
            <Skeleton count={1} height={20} width={50} />
          </div>
          <div className="skeleton-forecast-icon">
            <Skeleton count={1} height={50} width={50} />
          </div>
          <div className="skeleton-temp">
            <Skeleton count={1} height={20} width={50} />
          </div>
        </div>
        <div className="col-2">
          <div className="skeleton-day">
            <Skeleton count={1} height={20} width={50} />
          </div>
          <div className="skeleton-forecast-icon">
            <Skeleton count={1} height={50} width={50} />
          </div>
          <div className="skeleton-temp">
            <Skeleton count={1} height={20} width={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonForecast;
