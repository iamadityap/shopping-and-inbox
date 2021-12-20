import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { styled } from "@mui/system";

const Search = styled("div")(({ theme }) => ({
  borderRadius: 6,
  border: `1px solid #919191`,
  display: `flex`,
  flexDirection: "row",
  alignItems: `center`,
  justifyContent: `space-between`,
  flexWrap: "nowrap",
  padding: theme.spacing(0.5, 2, 0.5, 2),
  [theme.breakpoints.up("md")]: {
    minWidth: "200px",
    margin: theme.spacing(0, 4),
  },
  [theme.breakpoints.up("lg")]: {
    minWidth: "320px",
    margin: theme.spacing(0, 8),
  },
  [theme.breakpoints.up("xl")]: {
    minWidth: "400px",
    margin: theme.spacing(0, 12),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  pointerEvents: "none",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({}));

function SearchInput({ placeholder = "Search..." }) {
  return (
    <Search className="search-item">
      <StyledInputBase placeholder={placeholder} inputProps={{ "aria-label": "search" }} />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Search>
  );
}

export default SearchInput;
