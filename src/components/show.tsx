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
    moreInfo?: string;
    showTitle?: string;
}

const Show = ({ date, time, bands, venue, address, isPast, tickets, price, moreInfo, showTitle }: ShowProps) => {
    return (
        <ShowInfo {...{ isPast }}>
            {showTitle && <Title>{showTitle}</Title>}
            <Small>
                {date}
                {time && ` - ${time}`}
            </Small>
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
            {moreInfo && <Tickets href={moreInfo}>More Info</Tickets>}
        </ShowInfo>
    );
};

const Tickets = styled.a.attrs({ target: "_blank" })`
    font-size: 1.3rem;
`;

const Small = styled.span`
    font-size: 1.4rem;
    color: #ccc;
    display: block;
`;

const ShowInfo = styled.p<{ isPast }>`
    font-size: 1.8rem;
    line-height: 2.4rem;
    margin-bottom: 32px;

    ${(p) =>
        p.isPast &&
        `
        text-decoration: line-through;
    `}
`;

const Title = styled.strong`
    display: block;
    margin-bottom: 4px;
`;

export default Show;
