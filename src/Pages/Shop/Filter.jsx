import TuneIcon from "@mui/icons-material/Tune";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ContainerStyle from "./ContainerStyle";
import WindowIcon from "@mui/icons-material/Window";
const Filter = () => {
  return (
    <>
      <div className="filter">
        <ContainerStyle>
          <div className="filter-inner">
            <div className="filter-col">
              <TuneIcon />
              <p className="filter-text">Filter</p>
              <WindowIcon />
              <ViewDayIcon />
              <NavigateNextIcon />
              <p className="filter-text">Showing 1–16 of 32 results</p>
            </div>
            <div className="filter-col">
              <p>Show</p>
              <label htmlFor="">16</label>
              <p>Sort by</p>
              <label htmlFor="">Default</label>
            </div>
          </div>
        </ContainerStyle>
      </div>
    </>
  );
};

export default Filter;
