import GroupBy from "./filter-components/GroupBy";
import SortBy from "./filter-components/SortBy"


const Filters = () => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <SortBy />
        <GroupBy />
      </div>
    </>
  );
}

export default Filters