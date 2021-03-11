import React from "react";
import styled from "styled-components";

interface ShowProps {
    date: string;
    time: string;
    bands?: string;
    venue: string;
    address: string;
}

const Show = (props: ShowProps) => {
    const { date, time, bands, venue, address } = props;

    return (
        <p>
            <strong>
                {date}, {time}
            </strong>
            <br />
            {bands && "w/ " + bands} @ {venue}
            <br />
            <Address>{address}</Address>
        </p>
    );
};

const Address = styled.span`
    font-size: 1.3rem;
    color: #555;
`;

export default Show;
