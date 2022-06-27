import { ReactElement } from "react";
import FirstDropdown from "./firstDropdown";

const Home = (): ReactElement => {
    return (
        <>
            <h1>Home Page</h1>
            <FirstDropdown str="category 1" options={["1", "2", "3"]}></FirstDropdown>
        </>
    );
}

export default Home;