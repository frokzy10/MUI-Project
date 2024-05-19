import {TextField} from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField fullWidth={100} label="Поиск" type='search' value={value} onChange={onChange} />;
};

export default Search;