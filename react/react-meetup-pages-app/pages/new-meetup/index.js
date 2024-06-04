import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";
import React from "react";

const NewMeetUp = () => {
    return (
        <>
            <Head>
                <title>모임 생성하기</title>
                <NewMeetupForm/>
            </Head>
        </>
    )
}

export default NewMeetUp;