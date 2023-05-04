import React from "react";
import PropTypes from 'prop-types'
import Error from "next/error";
import NotFoundPage from "./404";

const ErrorPage = ({ statusCode }) => {
    if (statusCode == 404) {
        return <NotFoundPage />
    }
    return <Error statusCode={statusCode} />
}

export async function getServerSideProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404

    return {
        props: {
            statusCode
        }
    }
}

ErrorPage.propTypes = {
    statusCode: PropTypes.number
}

export default ErrorPage