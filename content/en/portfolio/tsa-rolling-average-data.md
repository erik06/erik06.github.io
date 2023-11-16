---
author: Erik Slagter
title: TSA Rolling Average Data
date: 2021-10-06
description: A chart of TSA data normalized to a rolling average
tags: ["python", "data vis", "web scraping", "plotly"]
thumbnail: "https://images.unsplash.com/photo-1583330357508-1864f8e57785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
---

## TSA Data

For this project I aimed to chart the passenger throughput [data from the Transportation Security Administration (TSA)](https://www.tsa.gov/travel/passenger-volumes) website to better understand the trends. While observing news outlets, I saw graphs with sharp swings up and down, which represented passenger throughput during the week and weekends. However, I found this representation to be jarring and not very informative. Therefore, I decided to create a normalized, rolling average on top of the original data to better show the trends.

To achieve this, I wrote a Python script that web scraped the TSA website for the data and used BeautifulSoup to organize it into a Jupyter notebook. Then, I plotted it nicely with Plotly. The resulting graph is more informative and visually appealing than the original graphs I had seen.

### Interactive Result

{{< iframe "https://erik06.github.io/tsa-data/" >}}

{{< button color="secondary" href="https://erik06.github.io/tsa-data/" >}}
View full screen
{{< /button >}}

#### Data source and works cited

PROJECT DATA UPDATED FROM: DEC 31, 2021

“TSA Checkpoint Travel Numbers (Current Year versus Prior Year(s)/Same Weekday).” TSA Checkpoint Travel Numbers (Current Year versus Prior Year(s)/Same Weekday) | Transportation Security Administration, Transportation and Security Administration of the United States of America, 2021, www.tsa.gov/coronavirus/passenger-throughput.
