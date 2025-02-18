import fs from "fs";
import path from "path";
import React from "react";
import Head from "next/head";

import { LineGrid } from "components";
import { LineData } from "types";
import { SummaryData } from "types";

type AppData = {
    summaryData: SummaryData;
    lineData: Record<string, LineData>;
};

type Props = {
    data: AppData;
};

const PATH_TO_DATA = path.join(process.cwd(), "data.json");
const RIDERSHIP_PATH = path.join(process.cwd(), "datagen/rtd/ridership/.data/ridership.json");

export async function getStaticProps() {
    const dataContents = fs.readFileSync(PATH_TO_DATA).toString();
    const data = JSON.parse(dataContents);

    const ridership = JSON.parse(fs.readFileSync(RIDERSHIP_PATH).toString());
    data.rtd_ridership = ridership;
    return {
        props: { data },
    };
}

const App = (props: Props) => {
    const { data } = props;
    return (
        <>
            <Head>
                <title>RTD Service Dashboard</title>
                <meta name="author" content="Greater Denver Transit" />
                <meta name="description" content="Data on RTD ridership and service levels" />
                <link rel="icon" type="image/png" href="./favicon.png" />
            </Head>
            <LineGrid rtd_ridership={undefined} {...data} />
        </>
    );
};

export default App;
