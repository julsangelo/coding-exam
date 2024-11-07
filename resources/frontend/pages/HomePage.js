import React, { useEffect, useState } from "react";
import styles from "./HomePage.module";
import Map from "../components/Map";
import Information from "../components/Information";
import SearchHistory from "../components/SearchHistory";
import { getIpData, getSearchData, postSearch } from "../ajax/backend";
import * as Yup from "yup";

const validationSchema = Yup.object({
    ipAddress: Yup.string()
        .matches(
            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
            "Invalid IP address format",
        )
        .required("IP address is required"),
});

export default function HomePage(user) {
    const [ipData, setIpData] = useState(null);
    const [searchData, setSearchData] = useState(null);
    const [ipAddress, setIpAddress] = useState("");
    const [error, setError] = useState("");
    const [location, setLocation] = useState({ lat: null, lng: null });

    useEffect(() => {
        getIpData(1, (data) => {
            setIpData(data);
        });
    }, []);

    useEffect(() => {
        getSearchData(1, (data) => {
            setSearchData(data);
        });
    }, [handleSearch]);

    const handleLocationChange = (lat, lng) => {
        setLocation({ lat, lng });
    };

    const handleInputChange = (e) => {
        setIpAddress(e.target.value);
        setError("");
    };

    const handleSearch = (e) => {
        e.preventDefault();
        postSearch(1, ipAddress);
    };

    useEffect(() => {
        if (ipData?.loc) {
            const locArray = ipData.loc.split(",");
            const [lat, lng] = locArray;
            setLocation({ lat, lng });
        }
    }, [ipData]);

    if (!location.lat || !location.lng) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.homePageContainer}>
            <Map lat={location.lat} long={location.lng} />
            <div className={styles.homePageInformation}>
                <form className={styles.form} onSubmit={handleSearch}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="0.0.0.0"
                        value={ipAddress}
                        onChange={handleInputChange}
                    />
                    {error && <div className={styles.error}>{error}</div>}
                    <button type="submit" className={styles.button}>
                        Search
                    </button>
                </form>
                <Information
                    data={ipData}
                    onLocationChange={handleLocationChange}
                />
                <SearchHistory
                    data={searchData}
                    onLocationChange={handleLocationChange}
                />
            </div>
        </div>
    );
}
