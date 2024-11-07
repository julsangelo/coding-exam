import React from "react";
import styles from "./Information.module";

export default function SearchHistory({ data, onLocationChange }) {
    const handleClick = (data) => {
        const locArray = data.split(",");
        const [lat, lng] = locArray;
        onLocationChange(lat, lng);
    };

    return (
        <div className={styles.informationContainer}>
            <p className={styles.informationContainerTitle}>Search History</p>
            {data ? (
                data.data.map((item, index) => (
                    <div className={styles.information}>
                        <div className={styles.informationData} key={index}>
                            <strong>IP address</strong>
                            <p>{item?.ip}</p>
                            <strong>Hostname</strong>
                            <p>{item?.hostname}</p>
                            <strong>City</strong>
                            <p>{item?.city}</p>
                            <strong>Region</strong>
                            <p>{item?.region}</p>
                            <strong>Country</strong>
                            <p>{item?.country}</p>
                            <strong>Location</strong>
                            <p>{item?.loc}</p>
                            <strong>Org</strong>
                            <p>{item?.org}</p>
                            <strong>Postal</strong>
                            <p>{item?.postal}</p>
                            <strong>Timezone</strong>
                            <p>{item?.timezone}</p>
                        </div>
                        <button
                            className={styles.button}
                            onClick={() => handleClick(item?.loc)}
                        >
                            See in map
                        </button>
                    </div>
                ))
            ) : (
                <p>No search history available.</p>
            )}
        </div>
    );
}
