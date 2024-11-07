import React, { useEffect } from "react";
import styles from "./Information.module";

export default function Information({ data, onLocationChange }) {
    const handleClick = (data) => {
        const locArray = data.split(",");
        var [lat, lng] = locArray;
        onLocationChange(lat, lng);
    };

    return (
        <div className={styles.informationContainer}>
            <p className={styles.informationContainerTitle}>IP Information</p>
            <div className={styles.information}>
                <div className={styles.informationData}>
                    <strong>IP address</strong>
                    <p>{data?.ip}</p>
                    <strong>Hostname</strong>
                    <p>{data?.hostname}</p>
                    <strong>City</strong>
                    <p>{data?.city}</p>
                    <strong>Region</strong>
                    <p>{data?.region}</p>
                    <strong>Country</strong>
                    <p>{data?.country}</p>
                    <strong>Location</strong>
                    <p>{data?.loc}</p>
                    <strong>Org</strong>
                    <p>{data?.org}</p>
                    <strong>Postal</strong>
                    <p>{data?.postal}</p>
                    <strong>Timezone</strong>
                    <p>{data?.timezone}</p>
                </div>
                <button
                    className={styles.button}
                    onClick={() => handleClick(data?.loc)}
                >
                    See in map
                </button>
            </div>
        </div>
    );
}
