import React, { useRef, useEffect } from 'react';
import { select, d3 } from 'd3';
import opacityLevel from '../helpers/opacityLevel';

const data = [25, 30, 55];

export default function ContributionsCalendar({ contributions }) {

    const calendarRef = useRef();

    console.log(contributions);

    useEffect(() => {

        const svgContainer = select(calendarRef.current).append('svg');

        svgContainer.selectAll('rect')
            .data(data)
            .join(
                enter =>
                    enter.append('rect')
                        .attr('width', 15)
                        .attr('height', 15)
                        .attr('fill', '#FE9922')
                        .attr('x', (d, i) => 0)
                        .attr('y', (d, i) => i * 15 + 5)
        )

    },[]);

    return (
        <div ref={calendarRef}></div>
    )
}