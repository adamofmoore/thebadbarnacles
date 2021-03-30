import React from "react";
import styled from "styled-components";

interface ShowProps {
    date: string;
    time: string;
    bands?: string;
    venue: string;
    address: string;
    isPast?: boolean;
}

const Show = (props: ShowProps) => {
    const { date, time, bands, venue, address, isPast } = props;

    return (
        <ShowInfo {...{ isPast }}>
            <strong>
                {date}, {time}
            </strong>
            <br />
            {bands && `w/ ${bands}`} @ {venue}
            <br />
            <Address>{address}</Address>
        </ShowInfo>
    );
};

const Address = styled.span`
    font-size: 1.3rem;
    color: #555;
`;

const ShowInfo = styled.p<{ isPast }>`
    ${(p) =>
        p.isPast &&
        `
        text-decoration: line-through;
    `}
`;

export default Show;
