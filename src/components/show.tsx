import React from "react";
import styled from "styled-components";

interface ShowProps {
    date: string;
    time: string;
    bands?: string;
    venue: string;
    address: string;
    isPast?: boolean;
    tickets?: string;
    price?: string;
}

const Show = ({ date, time, bands, venue, address, isPast, tickets, price }: ShowProps) => {
    return (
        <ShowInfo {...{ isPast }}>
            <strong>
                {date}
                {time && ` - ${time}`}
            </strong>
            {bands && (
                <>
                    <br />
                    with {bands}
                </>
            )}
            <Small>
                {venue && `${venue}, `}
                {address}
            </Small>
            {price && <Small>{price}</Small>}
            {tickets && <Tickets href={tickets}>Buy Tickets</Tickets>}
        </ShowInfo>
    );
};

const Tickets = styled.a.attrs({ target: "_blank" })`
    font-size: 1.3rem;
`;

const Small = styled.span`
    font-size: 1.3rem;
    color: #555;
    display: block;
`;

const ShowInfo = styled.p<{ isPast }>`
    margin-bottom: 32px;

    ${(p) =>
        p.isPast &&
        `
        text-decoration: line-through;
    `}
`;

export default Show;
