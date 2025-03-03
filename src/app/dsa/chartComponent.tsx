"use client"

import { Doughnut } from 'react-chartjs-2';
import {Chart, registerables } from 'chart.js'
import "./chartComponentStyle.scss"
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default function ChartComponent({hard, medium, easy}:{
    hard: number,
    medium: number,
    easy: number
}) {

    Chart.register(...registerables,ChartDataLabels);

    return (
        <div className="chartComponent">
            <Doughnut
            data={
                {
                    labels: ["Easy", "Medium"],
                    
                    datasets: [
                        {
                            label: "Problems",
                            data: [easy, medium],
                            backgroundColor: [
                                "rgb(146, 94, 250)",
                                "rgb(255, 28, 104)",
                                // "rgb(255, 205, 86)",
                            ],
                            hoverOffset: 4,
                            
                        },
                    ],
                    
                }
            }
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: 'Problems Solved',
                        font:{
                            size: 24,
                            
                        },
                        color: "black"
                    },
                    datalabels:{
                        color: "#fff",
                        font: {
                            size: 18,
                            weight: "bold"
                        },
                    }
                }
            }}
            />
        </div>
    )
}