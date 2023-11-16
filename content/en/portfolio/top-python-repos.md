---
author: Erik Slagter
title: Top Python Repositories
date: 2021-10-06
description: A chart of top Python repositories from the GitHub API
tags: ["python", "data vis", "plotly"]
thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
---

## Top Python Repositories

This project I generated an interactive visualization of the most-starred Python projects on GitHub using the Plotly library and the GitHub API. I first make a request to the GitHub API for repositories with the "python" language and sort the results by the number of stars. The response is then processed to extract the repository names, URLs, number of stars, owners, and descriptions. This data is used to create a bar chart visualization using the Plotly library, with the repository names as the x-axis, the number of stars as the y-axis, and the owners and descriptions as hover-text. The repositories are linked if the user clicks on the names on the x-axis. The resulting plot is saved as an HTML file and hosted on GitHub Pages (and iframed into this site below).

Overall, this code demonstrates how to use the Plotly library to create a simple bar chart visualization from data obtained from an API. It also showcases how to customize the plot's title, axis labels, and font sizes to make the visualization more visually appealing and informative.

### Interactive Result

{{< iframe "https://erik06.github.io/top-repos/index.html" >}}

{{< button color="primary" href="https://github.com/erik06/top-repos" >}}
View Repository
{{< /button >}}

{{< button color="secondary" href="https://erik06.github.io/top-repos/index.html" >}}
View full screen
{{< /button >}}

PROJECT DATA FROM: OCT 6TH, 2021
